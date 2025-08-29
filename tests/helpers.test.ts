import assert from 'assert';
import { indexBy } from '../src/helpers';
import { Element } from '../src/types';

describe('helper tests', () => {
    test('can index components', () => {
        let components: Element[] = [
            {
                id: 'A',
                type: 'Input',
                outputs: { OUT: true }
            },
            {
                id: 'OUT',
                type: 'Output',
                inputs: { IN: 'A' },
                outputs: { OUT: 'X' }
            }
        ];

        let indexed = indexBy(components, 'id');
        assert.equal(indexed.A, components[0]);
        assert.equal(indexed.OUT, components[1]);
    })
})