import { Element, Input, Output, State } from './types';

export function indexBy<S extends keyof T, T extends Record<S, string>>(
  elements: T[],
  key: S
) {
  const result: { [key: string]: T } = {};
  for (let element of elements) {
    result[element[key]] = element;
  }
  return result;
}

export function setInput(component: Element, value: State) {
  (<Input>component).outputs.OUT = value;
}

export function readOutput(component: Element): State {
  return (<Output>component).outputs.OUT;
}
