import { Element } from './types';
import { indexBy, readOutput, setInput } from './helpers';
import { circuitsLookup } from './circuits';
import { evaluateAll } from './evaluate';
import { translateAll } from './translate';
import { cpu } from './cpu';
import { assemble } from './assembler';
import { getProgram } from './program';

let components: Element[] = cpu;

let isRunning = false;
components = translateAll(components, circuitsLookup);
const componentLookup = indexBy(components, 'id');

const registerInputs = (components: Element[]) => {
  for (let component of components) {
    if (component.type === 'Input' && component.id.indexOf('_') === -1) {
      let element = document.getElementById(component.id);
      if (element) {
        element.onclick = onclick;
      }
    }
  }
};

const onclick = (event: Event) => {
  let element = <HTMLInputElement>event.target;
  element.classList.toggle('active');

  let component = componentLookup[element.id];
  if (component.type === 'Input') {
    component.outputs.OUT = element.classList.contains('active');
  }

  evaluateAll(components, componentLookup);

  paintOutputs(components, componentLookup);
};

const paintOutputs = (components: Element[], componentLookup: Record<string, Element>) => {
  let ram: number[] = new Array(16).fill(0);

  for (let component of components) {
    if (component.id.startsWith('MEMORYCONTENTS_ram_memory') && component.id.includes('_latch_Q') && component.type === 'Output' && component.parentType === 'DLATCH') {
      let [first, ...rest] =  component.id.replace('MEMORYCONTENTS_ram_memory', '').split('_');
      let i = Number.parseInt(first);
      let restJoined = rest.join('_').replace('memory', '');
      let bitValue = Number.parseInt(restJoined.replace('_latch_latch_Q', ''));
      let mask = +component.outputs.OUT << bitValue;
      ram[i] = ram[i] | mask
    }

    if (
      (component.type === 'Output' || component.type === 'Bus' || component.type === 'BusPullDown') &&
      component.id.indexOf('_') === -1
    ) {
      var element = document.getElementById(component.id);
      if (element) {
        if (component.outputs.OUT === true) {
          element.classList.add('active');
          element.classList.remove('high-impedance');
        }
        if (component.outputs.OUT === false) {
          element.classList.remove('active');
          element.classList.remove('high-impedance');
        }
        if (component.outputs.OUT === 'X') {
          element.classList.remove('active');
          element.classList.add('high-impedance');
        }
      }
    }
  }

  const outputRegisterValue = readOutputRegisterValue(componentLookup);
  setOutputDisplayValue(outputRegisterValue);

  const selectedAddressValue = readSelectedAddressValue(componentLookup);
  paintActiveRamLine(selectedAddressValue);
  paintActiveBootstrapperLine(selectedAddressValue);

  paintRamValues(ram);
};

const paintRamValues = (ram: number[]) => {
  let ramValues = document.querySelectorAll('.ram-value');
  for (let i = 0; i < ram.length; i++) {
    let binaryNumber = ram[i].toString(2).padStart(8, '0');
    ramValues[i].textContent =
      binaryNumber.substring(0, 4) + ' ' + binaryNumber.substring(4);
  }
}

const readOutputRegisterValue = (componentLookup: Record<string, Element>) => {
  let value = 0;
  for (let i = 7; i >= 0; i--) {
    let bit = readOutput(componentLookup['REGO' + i]);
    value = value << 1 | (bit === true ? 1 : 0);
  }
  return value;
}

const readSelectedAddressValue = (componentLookup: Record<string, Element>) => {
  let value = 0;
  for (let i = 3; i >= 0; i--) {
    let bit = readOutput(componentLookup['ADDR' + i]);
    value = value << 1 | (bit === true ? 1 : 0);
  }
  return value;
}

const paintActiveRamLine = (value: number) => {
  let lines = document.querySelectorAll('.ram-line span');
  for (let line of lines) {
    line.classList.remove('active-line');
  }
  lines[value].classList.add('active-line');
}

const paintActiveBootstrapperLine = (value: number) => {
  let lines = document.querySelectorAll('.line-counter span');
  for (let line of lines) {
    line.classList.remove('active-line');
  }
  lines[value].classList.add('active-line');
}

const setOutputDisplayValue = (number: number) => {
  let sevenSegmentDisplay = document.querySelector('.seven-segment-display');
  if (!sevenSegmentDisplay) throw new Error('Seven Segment Display not found');

  const onesPlace = number % 10;
  const tensPlace = Math.floor((number / 10) % 10);
  const hundredsPlace = Math.floor((number / 100) % 10);

  let digits = sevenSegmentDisplay.querySelectorAll(
    '.seven-segment-display-digit'
  );
  if (digits.length !== 4)
    throw new Error('Seven Segment Display does not have enough digits');

  digits[0].textContent = number >= 0 ? '' : '-';
  digits[1].textContent = hundredsPlace ? hundredsPlace.toString() : '0';
  digits[2].textContent = tensPlace ? tensPlace.toString() : '0';
  digits[3].textContent = onesPlace ? onesPlace.toString() : '0';
}

function setMemoryAddress(componentLookup: Record<string, Element>, address: number) {
  for (let i = 0; i < 4; i++) {
    setInput(componentLookup['DIPA' + i], !!(address >> i & 1));
  }
}

function setRamValue(componentLookup: Record<string, Element>, d: number) {
  for (let i = 0; i < 8; i++) {
    setInput(componentLookup['DIPD' + i], !!(d >> i & 1));
  }
}

async function assembleCodeInternal() {
  return new Promise(resolve => {
    setTimeout(() => {
      let textArea = document.querySelector('#code') as HTMLTextAreaElement;
      let code = textArea.value?.split('\n') ?? [];
      let program = assemble(code);

      setInput(componentLookup.MODE, false);

      setInput(componentLookup.CLR, true);
      evaluateAll(components, componentLookup);
      setInput(componentLookup.CLR, false);

      for (let i = 0; i < 16; i++) {
        let value = program[i] === undefined ? 0 : program[i];
        setMemoryAddress(componentLookup, i);
        setRamValue(componentLookup, value);
        setInput(componentLookup.WRITE, true);
        evaluateAll(components, componentLookup);

        setInput(componentLookup.WRITE, false);
        evaluateAll(components, componentLookup);
      }

      setMemoryAddress(componentLookup, 0);
      setInput(componentLookup.MODE, true);
      evaluateAll(components, componentLookup);
      paintOutputs(components, componentLookup);

      resolve(true);
    }, 0);
  });
}

async function assembleCode() {
  let el = <HTMLInputElement>document.querySelector('#assemble-btn');
  el.disabled = true;
  el.textContent = 'Assembling';

  await assembleCodeInternal();

  el.disabled = false;
  el.textContent = 'Assemble';

}

async function sleep(msec: number) {
  return new Promise(resolve => setTimeout(resolve, msec));
}

async function start(event: Event) {
  if (!isRunning) {
    (<HTMLInputElement>event.target).textContent = 'Stop';
  } else {
    (<HTMLInputElement>event.target).textContent = 'Run';
  }

  await sleep(0);

  isRunning = !isRunning;

  while (isRunning) {
    toggleClock();
    await sleep(0);
    toggleClock();
    await sleep(0);
  }

  (<HTMLInputElement>event.target).disabled = false;
}

function toggleClock() {
  setInput(componentLookup.OSC, !readOutput(componentLookup.OSC));
  evaluateAll(components, componentLookup);
  paintOutputs(components, componentLookup);
}

function toggleWrite() {
  setInput(componentLookup.WRITE, !readOutput(componentLookup.WRITE));
  evaluateAll(components, componentLookup);
  paintOutputs(components, componentLookup);
}

function toggleMode() {
  setInput(componentLookup.MODE, !readOutput(componentLookup.MODE));
  evaluateAll(components, componentLookup);
  paintOutputs(components, componentLookup);
}

function reset() {
  setInput(componentLookup.CLR, true);
  evaluateAll(components, componentLookup);
  paintOutputs(components, componentLookup);

  setInput(componentLookup.CLR, false);
  evaluateAll(components, componentLookup);
  paintOutputs(components, componentLookup);
}

function programChanged(e: Event) {
  let programSelect = document.querySelector('#program') as HTMLSelectElement;
  setProgram(programSelect.value);
  assembleCode();
}

function setBootloader(code: string[]) {
  let textArea = document.querySelector('#code') as HTMLTextAreaElement;
  if (!textArea) throw new Error('textarea not found');
  textArea.value = code.join('\n');
}

function setProgram(name: string) {
  let code = getProgram(name.toLowerCase());
  setBootloader(code);
  assembleCode();
}

registerInputs(components);
evaluateAll(components, componentLookup);
paintOutputs(components, componentLookup);

document.querySelector('#assemble-btn')?.addEventListener('click', assembleCode);
document.querySelector('#clk-btn')?.addEventListener('mousedown', toggleClock);
document.querySelector('#clk-btn')?.addEventListener('mouseup', toggleClock);
document.querySelector('#mode-btn')?.addEventListener('click', toggleMode);
document.querySelector('#rst-btn')?.addEventListener('click', reset);
document.querySelector('#start-btn')?.addEventListener('click', start);
document.querySelector('#program')?.addEventListener('change', programChanged);

document.querySelector('#write-btn')?.addEventListener('mousedown', toggleWrite);
document.querySelector('#write-btn')?.addEventListener('mouseup', toggleWrite);


setProgram('Fibonacci');