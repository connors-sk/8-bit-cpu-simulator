import { Circuit, Element } from './types';

export function translateAll(
  components: Element[],
  circuits: Record<string, Circuit>
): Element[] {
  let replacedComponents = new Map<string, string>();

  while (true) {
    components = translate(components, circuits, replacedComponents);
    let complete = true;
    for (let component of components) {
      if (
        component.type !== 'Input' &&
        component.type !== 'Output' &&
        component.type !== 'NAND' &&
        component.type !== 'TriState' &&
        component.type !== 'Bus' &&
        component.type !== 'BusPullDown'
      ) {
        complete = false;
        break;
      }
    }

    if (complete) return translate(components, circuits, replacedComponents);
  }
}

export function translate(
  components: Element[],
  circuits: Record<string, Circuit>,
  replacedComponents: Map<string, string>
): Element[] {
  let result = [];

  for (let component of components) {
    if (
      component.type !== 'Input' &&
      component.type !== 'Output' &&
      component.type !== 'NAND' &&
      component.type !== 'TriState' &&
      component.type !== 'Bus' &&
      component.type !== 'BusPullDown'
    ) {
      let circuit = circuits[component.type];
      if (!circuit) throw new Error('Circuit cannot be null');

      let parts = component.id.split('_');
      parts = parts.slice(0, -1);
      let parent = parts.join('_');
      if (parent) {
        parent = parent + '_';
      }

      let prefix = component.id + '_';

      let circuitParts = circuit.parts;
      for (let circuitPart of circuitParts) {
        let copy = structuredClone(circuitPart);

        if (
          copy.type === 'Bus' ||
          copy.type === 'BusPullDown' ||
          copy.type === 'NAND' ||
          copy.type === 'TriState'
        ) {
          let keys = Object.keys(copy.inputs);
          for (let key of keys) {
            copy.inputs[key] = prefix + copy.inputs[key];
          }

          copy.parentType = component.type;
        }

        if (copy.type == 'Input') {
          copy.inputs = { IN: parent + component.inputs[copy.id] };
          copy.parentType = component.type;
        }

        if (copy.type === 'Output') {
          copy.inputs.IN = prefix + copy.inputs.IN;
          replacedComponents.set(
            component.id + '.' + copy.id,
            prefix + copy.id + '.' + 'OUT'
          );
          copy.parentType = component.type;
        }

        copy.id = prefix + copy.id;
        result.push(copy);
      }
    } else {
      result.push(component);
    }
  }

  for (let component of components) {
    if (component.inputs) {
      let keys = Object.keys(component.inputs);
      for (let key of keys) {
        if (replacedComponents.has(component.inputs[key])) {
          component.inputs[key] = <string>(
            replacedComponents.get(component.inputs[key])
          );
        }
      }
    }
  }

  return result;
}
