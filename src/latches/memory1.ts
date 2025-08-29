import { Circuit } from "../types";

export const memory1: Circuit = {
    id: 'MEMORY1',
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
            id: 'E',
            type: 'Input',
            outputs: { OUT: false }
        },
        {
            id: 'not',
            type: 'NOT',
            inputs: { IN: 'W.OUT' }
        },
        {
            id: 'and',
            type: 'AND',
            inputs: { A: 'E.OUT', B: 'not.OUT' }
        },
        {
            id: 'latch',
            type: 'DLATCH',
            inputs: { D: 'D.OUT', W: 'W.OUT' }
        },
        {
            id: 'tri',
            type: 'TriState1',
            inputs: { IN: 'latch.Q', SEL: 'and.OUT' },
        },
        {
            id: 'O',
            type: 'Output',
            inputs: { IN: 'tri.OUT' },
            outputs: { OUT: 'X' }
        }
    ]
}