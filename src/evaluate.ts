import { State, Element } from './types';

function evaluate(
  components: Element[],
  componentLookup: Record<string, Element>
) {
  components.forEach((component) => {
    if (component.type === 'Input') {
      if (component.inputs) {
        component.outputs.OUT = getValue2(componentLookup, component.inputs.IN);
      }
    }

    if (component.type === 'Output') {
      let input = component.inputs.IN;
      var val = getValue2(componentLookup, input);
      component.outputs.OUT = val;
    }

    if (component.type === 'TriState') {
      let inValue = getValue2(componentLookup, component.inputs['IN']);
      let selValue = getValue2(componentLookup, component.inputs['SEL']);
      if (inValue != 'X' && selValue != 'X') {
        component.outputs.OUT = selValue ? inValue : 'X';
      }
    }

    if (component.type === 'NAND') {
      let input1Value = getValue2(componentLookup, component.inputs['A']);
      let input2Value = getValue2(componentLookup, component.inputs['B']);
      if (input1Value != 'X' && input2Value != 'X') {
        component.outputs.OUT = !(input1Value && input2Value);
      }
    }

    if (component.type === 'Bus' || component.type === 'BusPullDown') {
      let keys = Object.keys(component.inputs);
      let values = [];
      for (let key of keys) {
        values.push(getValue2(componentLookup, component.inputs[key]));
      }

      if (values.length == 0)
        throw new Error('Nothing is connected to bus line: ' + component.id);

      let result: State = 'X';
      for (let value of values) {
        if ((value === true || value === false) && result === 'X') {
          result = value;
        }
      }

      if (component.type === 'BusPullDown' && result === 'X') {
        result = false;
      }

      component.outputs.OUT = result;
    }
  });
}

function getValue2(
  componentLookup: Record<string, Element>,
  input: string
): State {
  if (input.endsWith('CONST_1')) return true;
  if (input.endsWith('CONST_0')) return false;

  let inputParts = input.split('.');
  if (inputParts.length != 2) throw new Error('Invalid input: ' + input);

  let component = componentLookup[inputParts[0]];
  if (!component) throw new Error('Cannot find component: ' + inputParts[0]);

  if (
    component.type === 'Input' ||
    component.type === 'Output' ||
    component.type === 'TriState' ||
    component.type === 'Bus' ||
    component.type === 'BusPullDown' ||
    component.type === 'NAND'
  ) {
    return component.outputs[inputParts[1]];
  }

  throw new Error('Unsupported ElementType: ' + component.type);
}

export function evaluateAll(
  components: Element[],
  componentLookup: Record<string, Element>
) {
  for (let i = 0; i < 6; i++) {
    evaluate(components, componentLookup);
  }

  return components;
}
