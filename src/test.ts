import { Element } from './types';
import { indexBy } from './helpers';
import { circuitsLookup } from './circuits';
import { evaluateAll } from './evaluate';
import { translateAll } from './translate';

let components: Element[] = circuitsLookup.MAR.parts;

components = translateAll(components, circuitsLookup);

const componentLookup = indexBy(components, 'id');

const paintInputs = (components: Element[]) => {
  const container = document.getElementById('container');
  if (!container) {
    throw new Error('Container not found');
  }

  for (let component of components) {
    if (component.type === 'Input' && component.id.indexOf('_') === -1) {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = component.id;
      checkbox.checked = <boolean>component.outputs.OUT;
      checkbox.name = 'checkbox-' + component.id;
      checkbox.onclick = onclick;

      const label = document.createElement('label');
      label.htmlFor = 'checkbox-' + component.id;
      label.appendChild(document.createTextNode(component.id.toString()));

      container.appendChild(checkbox);
      container.appendChild(label);
    }
  }
};

const onclick = (event: Event) => {
  let checkbox = <HTMLInputElement>event.target;

  let component = componentLookup[checkbox.id];
  if (component.type === 'Input') {
    component.outputs.OUT = checkbox.checked;
  }

  for (let i = 0; i < 3; i++) {
    evaluateAll(components, componentLookup);
  }

  paintOutputs(components);
};

const paintOutputs = (components: Element[]) => {
  const container = document.getElementById('container');
  if (!container) {
    throw new Error('Container not found');
  }

  for (let component of components) {
    if (component.type === 'Output' && component.id.indexOf('_') === -1) {
      var element = document.getElementById(component.id);
      if (!element) {
        var span = document.createElement('span');
        span.id = component.id;
        span.textContent = component.outputs.OUT.toString();
        container.appendChild(span);
      } else {
        element.textContent = component.outputs.OUT.toString();
      }
    }
  }
};

paintInputs(components);
for (let i = 0; i < 5; i++) {
  evaluateAll(components, componentLookup);
}
paintOutputs(components);
