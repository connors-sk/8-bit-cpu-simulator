import { Circuit } from "../types";

export const dlatch: Circuit = {
    id: 'DLATCH',
    parts: [
        {
            id: 'D',
            type: 'Input',
            outputs: { OUT: false }
        },
        {
            id: 'W',
            type: 'Input',
            outputs: { OUT: false }
        },
        {
            id: 'not',
            type: 'NOT',
            inputs: { IN: 'D.OUT' }
        },
        {
            id: 'latch',
            type: 'GATEDSRLATCH',
            inputs: { R: 'not.OUT', S: 'D.OUT', W: 'W.OUT' }
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