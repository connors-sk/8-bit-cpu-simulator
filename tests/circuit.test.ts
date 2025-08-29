import assert from 'assert';
import { circuitsLookup } from '../src/circuits';
import { evaluateAll } from '../src/evaluate';
import { indexBy, setInput } from '../src/helpers';
import { translateAll } from '../src/translate';
import { Element, Output } from '../src/types';

describe('helper tests', () => {
    test('can translate and circuit', () => {
        let components: Element[] = [
            {
                id: 'A',
                type: 'Input',
                outputs: { OUT: true }
            },
            {
                id: 'B',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'and',
                type: 'AND',
                inputs: { A: 'A.OUT', B: 'B.OUT' }
            },
            {
                id: 'OUT',
                type: 'Output',
                inputs: { IN: 'and.OUT' },
                outputs: { OUT: 'X' }
            }
        ];

        var componentLookup = run(components);

        assert.equal(false, (<Output>componentLookup.OUT).outputs.OUT)
    })

    test('can translate or circuit', () => {
        let components: Element[] = [
            {
                id: 'A',
                type: 'Input',
                outputs: { OUT: true }
            },
            {
                id: 'B',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'or',
                type: 'OR',
                inputs: { A: 'A.OUT', B: 'B.OUT' }
            },
            {
                id: 'OUT',
                type: 'Output',
                inputs: { IN: 'or.OUT' },
                outputs: { OUT: 'X' }
            }
        ];

        var componentLookup = run(components);

        assert.equal(true, (<Output>componentLookup.OUT).outputs.OUT)
    })

    test('can translate xor circuit', () => {
        let components: Element[] = [
            {
                id: 'A',
                type: 'Input',
                outputs: { OUT: true }
            },
            {
                id: 'B',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'xor',
                type: 'XOR',
                inputs: { A: 'A.OUT', B: 'B.OUT' }
            },
            {
                id: 'OUT',
                type: 'Output',
                inputs: { IN: 'xor.OUT' },
                outputs: { OUT: 'X' }
            }
        ];

        var componentLookup = run(components);

        assert.equal(true, (<Output>componentLookup.OUT).outputs.OUT)
    })

    test('can translate not circuit', () => {
        let components: Element[] = [
            {
                id: 'A',
                type: 'Input',
                outputs: { OUT: true }
            },
            {
                id: 'not',
                type: 'NOT',
                inputs: { IN: 'A.OUT' }
            },
            {
                id: 'OUT',
                type: 'Output',
                inputs: { IN: 'not.OUT' },
                outputs: { OUT: 'X' }
            }
        ];

        var componentLookup = run(components);

        assert.equal(false, (<Output>componentLookup.OUT).outputs.OUT)
    })

    test('can translate halfadder circuit', () => {
        let components: Element[] = [
            {
                id: 'A',
                type: 'Input',
                outputs: { OUT: true }
            },
            {
                id: 'B',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'halfAdder',
                type: 'HALFADDER',
                inputs: { A: 'A.OUT', B: 'B.OUT' }
            },
            {
                id: 'S',
                type: 'Output',
                inputs: { IN: 'halfAdder.SUM' },
                outputs: { OUT: 'X' }
            },
            {
                id: 'C',
                type: 'Output',
                inputs: { IN: 'halfAdder.CO' },
                outputs: { OUT: 'X' }
            }
        ];

        var componentLookup = run(components);

        assert.equal(true, (<Output>componentLookup.S).outputs.OUT)
    })

    test('can translate fulladder circuit', () => {
        let components: Element[] = [
            {
                id: 'A',
                type: 'Input',
                outputs: { OUT: true }
            },
            {
                id: 'B',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'CI',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'fullAdder',
                type: 'FULLADDER',
                inputs: { A: 'A.OUT', B: 'B.OUT', CI: 'CI.OUT' }
            },
            {
                id: 'S',
                type: 'Output',
                inputs: { IN: 'fullAdder.SUM' },
                outputs: { OUT: 'X' }
            },
            {
                id: 'C',
                type: 'Output',
                inputs: { IN: 'fullAdder.CO' },
                outputs: { OUT: 'X' }
            }
        ];

        var componentLookup = run(components);

        assert.equal(true, (<Output>componentLookup.S).outputs.OUT)
    })

    test('can translate register1 circuit', () => {
        let components: Element[] = [
            {
                id: 'D',
                type: 'Input',
                outputs: { OUT: 'X' }
            },
            {
                id: 'CLK',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'CLR',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'LOAD',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'register1',
                type: 'REGISTER1',
                inputs: { D: 'D.OUT', LOAD: 'LOAD.OUT', CLK: 'CLK.OUT', CLR: 'CLR.OUT' }
            },
            {
                id: 'OUT',
                type: 'Output',
                inputs: { IN: 'register1.OUT' },
                outputs: { OUT: 'X' }
            }
        ];

        components = translateAll(components, circuitsLookup);
        const componentLookup = indexBy(components, 'id');
        evaluateAll(components, componentLookup);

        setInput(componentLookup.CLK, true);
        evaluateAll(components, componentLookup);

        assert.equal((<Output>componentLookup.OUT).outputs.OUT, false)
    })

    test('can translate circuit with X', () => {
        let components: Element[] = [
            {
                id: 'A',
                type: 'Input',
                outputs: { OUT: 'X' }
            },
            {
                id: 'B',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'and',
                type: 'AND',
                inputs: { A: 'A.OUT', B: 'B.OUT' }
            },
            {
                id: 'OUT',
                type: 'Output',
                inputs: { IN: 'and.OUT' },
                outputs: { OUT: false }
            }
        ];

        components = translateAll(components, circuitsLookup);
        const componentLookup = indexBy(components, 'id');
        evaluateAll(components, componentLookup);
        assert.equal((<Output>componentLookup.OUT).outputs.OUT, false)
    })
})

function run(components: Element[]) {
    components = translateAll(components, circuitsLookup);
    // console.log(components);

    const componentLookup = indexBy(components, 'id');
    evaluateAll(components, componentLookup);
    return componentLookup;
}