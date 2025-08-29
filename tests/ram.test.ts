import assert from 'assert';
import { circuitsLookup } from '../src/circuits';
import { evaluateAll } from '../src/evaluate';
import { indexBy, readOutput, setInput } from '../src/helpers';
import { translateAll } from '../src/translate';
import { Element, State, Output, Input } from '../src/types';

describe('ram tests', () => {
    test('can read and write values', () => {
        let components = circuitsLookup.RAM.parts;
        components = translateAll(components, circuitsLookup);
        const componentLookup = indexBy(components, 'id');

        for (let addr = 0; addr < 16; addr++) {
            setAddress(componentLookup, addr);
            setValue(componentLookup, 255 - addr);
            setInput(componentLookup.W, true);
            components = evaluateAll(components, componentLookup);
            setInput(componentLookup.W, false);
            components = evaluateAll(components, componentLookup);
        }

        for (let addr = 14; addr < 16; addr++) {
            setAddress(componentLookup, addr);
            setInput(componentLookup.E, true);
            components = evaluateAll(components, componentLookup);
            assert.equal(readValue(componentLookup), 255 - addr, `D:${addr},A:${addr}`);
        }
    })
})

function setAddress(componentLookup: Record<string, Element>, address: number) {
    for (let i = 0; i < 4; i++) {
        setInput(componentLookup['A' + i], !!(address >> i & 1));
    }
}

function setValue(componentLookup: Record<string, Element>, d: number) {
    for (let i = 0; i < 8; i++) {
        setInput(componentLookup['D' + i], !!(d >> i & 1));
    }
}

function readValue(componentLookup: Record<string, Element>) {
    let value = 0;
    for (let i = 7; i >= 0; i--) {
        let bit = readOutput(componentLookup['O' + i]);
        value = value << 1 | (bit === true ? 1 : 0);
    }
    return value;
}