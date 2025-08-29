import assert from 'assert';
import { circuitsLookup } from '../src/circuits';
import { evaluateAll } from '../src/evaluate';
import { indexBy, readOutput, setInput } from '../src/helpers';
import { translateAll } from '../src/translate';
import { Element } from '../src/types';

describe('alu test', () => {
    test('can add numbers', () => {
        let components = circuitsLookup.ALU.parts;
        components = translateAll(components, circuitsLookup);
        const componentLookup = indexBy(components, 'id');

        setBValue(componentLookup, 1);

        for (let addr = 0; addr < 255; addr++) {
            setAValue(componentLookup, addr);
            components = evaluateAll(components, componentLookup);
            assert.equal(readValue(componentLookup), addr + 1);
        }
    })
})

function setAValue(componentLookup: Record<string, Element>, value: number) {
    for (let i = 0; i < 8; i++) {
        setInput(componentLookup['A' + i], !!(value >> i & 1));
    }
}

function setBValue(componentLookup: Record<string, Element>, value: number) {
    for (let i = 0; i < 8; i++) {
        setInput(componentLookup['B' + i], !!(value >> i & 1));
    }
}

function readValue(componentLookup: Record<string, Element>) {
    let value = 0;
    for (let i = 7; i >= 0; i--) {
        let bit = readOutput(componentLookup['SUM' + i]);
        value = value << 1 | (bit === true ? 1 : 0);
    }
    return value;
}