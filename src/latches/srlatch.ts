import { Circuit } from "../types";

export const srlatch: Circuit = {
    id: 'SRLATCH',
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
            id: 'nor1',
            type: 'NOR',
            inputs: { A: 'R.OUT', B: 'nor2.OUT' }
        },
        {
            id: 'nor2',
            type: 'NOR',
            inputs: { A: 'S.OUT', B: 'nor1.OUT' }
        },
        {
            id: 'Q',
            type: 'Output',
            inputs: { IN: 'nor1.OUT' },
            outputs: { OUT: true }
        },
        {
            id: '~Q',
            inputs: { IN: 'nor2.OUT' },
            type: 'Output',
            outputs: { OUT: false }
        }
    ]
};