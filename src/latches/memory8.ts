import { Circuit } from "../types";

export const memory8: Circuit = {
    id: 'MEMORY8',
    parts: [
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
            id: 'SEL',
            type: 'Input',
            outputs: { OUT: false }
        },
        {
            id: 'D0',
            type: 'Input',
            outputs: { OUT: false }
        },
        {
            id: 'D1',
            type: 'Input',
            outputs: { OUT: false }
        },
        {
            id: 'D2',
            type: 'Input',
            outputs: { OUT: false }
        },
        {
            id: 'D3',
            type: 'Input',
            outputs: { OUT: false }
        },
        {
            id: 'D4',
            type: 'Input',
            outputs: { OUT: false }
        },
        {
            id: 'D5',
            type: 'Input',
            outputs: { OUT: false }
        },
        {
            id: 'D6',
            type: 'Input',
            outputs: { OUT: false }
        },
        {
            id: 'D7',
            type: 'Input',
            outputs: { OUT: false }
        },
        {
            id: 'and0',
            type: 'AND',
            inputs: {
                A: 'SEL.OUT', B: 'W.OUT'
            }
        },
        {
            id: 'and1',
            type: 'AND',
            inputs: {
                A: 'SEL.OUT', B: 'E.OUT'
            }
        },
        {
            id: 'memory0',
            type: 'MEMORY1',
            inputs: {
                D: 'D0.OUT',
                W: 'and0.OUT',
                E: 'and1.OUT'
            }
        },
        {
            id: 'memory1',
            type: 'MEMORY1',
            inputs: {
                D: 'D1.OUT',
                W: 'and0.OUT',
                E: 'and1.OUT'
            }
        },
        {
            id: 'memory2',
            type: 'MEMORY1',
            inputs: {
                D: 'D2.OUT',
                W: 'and0.OUT',
                E: 'and1.OUT'
            }
        },
        {
            id: 'memory3',
            type: 'MEMORY1',
            inputs: {
                D: 'D3.OUT',
                W: 'and0.OUT',
                E: 'and1.OUT'
            }
        },
        {
            id: 'memory4',
            type: 'MEMORY1',
            inputs: {
                D: 'D4.OUT',
                W: 'and0.OUT',
                E: 'and1.OUT'
            }
        },
        {
            id: 'memory5',
            type: 'MEMORY1',
            inputs: {
                D: 'D5.OUT',
                W: 'and0.OUT',
                E: 'and1.OUT'
            }
        },
        {
            id: 'memory6',
            type: 'MEMORY1',
            inputs: {
                D: 'D6.OUT',
                W: 'and0.OUT',
                E: 'and1.OUT'
            }
        },
        {
            id: 'memory7',
            type: 'MEMORY1',
            inputs: {
                D: 'D7.OUT',
                W: 'and0.OUT',
                E: 'and1.OUT'
            }
        },
        {
            id: 'O0',
            type: 'Output',
            inputs: { IN: 'memory0.O' },
            outputs: { OUT: 'X' }
        },
        {
            id: 'O1',
            type: 'Output',
            inputs: { IN: 'memory1.O' },
            outputs: { OUT: 'X' }
        },
        {
            id: 'O2',
            type: 'Output',
            inputs: { IN: 'memory2.O' },
            outputs: { OUT: 'X' }
        },
        {
            id: 'O3',
            type: 'Output',
            inputs: { IN: 'memory3.O' },
            outputs: { OUT: 'X' }
        },
        {
            id: 'O4',
            type: 'Output',
            inputs: { IN: 'memory4.O' },
            outputs: { OUT: 'X' }
        },
        {
            id: 'O5',
            type: 'Output',
            inputs: { IN: 'memory5.O' },
            outputs: { OUT: 'X' }
        },
        {
            id: 'O6',
            type: 'Output',
            inputs: { IN: 'memory6.O' },
            outputs: { OUT: 'X' }
        },
        {
            id: 'O7',
            type: 'Output',
            inputs: { IN: 'memory7.O' },
            outputs: { OUT: 'X' }
        }
    ]
}