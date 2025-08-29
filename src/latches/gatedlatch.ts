import { Circuit } from "../types";

export const gatedsrlatch: Circuit = {
    id: 'GATEDSRLATCH',
    parts: [
        {
            id: 'R',
            type: 'Input',
            outputs: { OUT: false }
        },
        {
            id: 'S',
            type: 'Input',
            outputs: { OUT: false }
        },
        {
            id: 'W',
            type: 'Input',
            outputs: { OUT: false }
        },
        {
            id: 'and1',
            type: 'AND',
            inputs: { A: 'R.OUT', B: 'W.OUT' }
        },
        {
            id: 'and2',
            type: 'AND',
            inputs: { A: 'S.OUT', B: 'W.OUT' }
        },
        {
            id: 'latch',
            type: 'SRLATCH',
            inputs: { R: 'and1.OUT', S: 'and2.OUT' }
        },
        {
            id: 'Q',
            type: 'Output',
            inputs: { IN: 'latch.Q' },
            outputs: { OUT: true }
        },
        {
            id: '~Q',
            inputs: { IN: 'latch.~Q' },
            type: 'Output',
            outputs: { OUT: false }
        }
    ]
};