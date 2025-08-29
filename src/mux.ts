import { Circuit } from "./types";

export const mux: Circuit[] = [
    {
        id: 'MUX',
        parts: [
            {
                id: 'A',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'B',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'SEL',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'not',
                type: 'NOT',
                inputs: { IN: 'SEL.OUT' }
            },
            {
                id: 'and1',
                type: 'AND',
                inputs: { A: 'A.OUT', B: 'not.OUT' }
            },
            {
                id: 'and2',
                type: 'AND',
                inputs: { A: 'B.OUT', B: 'SEL.OUT' }
            },
            {
                id: 'or',
                type: 'OR',
                inputs: { A: 'and1.OUT', B: 'and2.OUT' }
            },
            {
                id: 'Y',
                type: 'Output',
                inputs: { IN: 'or.OUT' },
                outputs: { OUT: false }
            }

        ]
    },
    {
        id: 'MUX4',
        parts: [
            {
                id: 'A0',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'A1',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'A2',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'A3',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'B0',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'B1',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'B2',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'B3',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'SEL',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'mux0',
                type: 'MUX',
                inputs: { A: 'A0.OUT', B: 'B0.OUT', SEL: 'SEL.OUT' }
            },
            {
                id: 'mux1',
                type: 'MUX',
                inputs: { A: 'A1.OUT', B: 'B1.OUT', SEL: 'SEL.OUT' }
            },
            {
                id: 'mux2',
                type: 'MUX',
                inputs: { A: 'A2.OUT', B: 'B2.OUT', SEL: 'SEL.OUT' }
            },
            {
                id: 'mux3',
                type: 'MUX',
                inputs: { A: 'A3.OUT', B: 'B3.OUT', SEL: 'SEL.OUT' }
            },
            {
                id: 'Y0',
                type: 'Output',
                inputs: { IN: 'mux0.Y' },
                outputs: { OUT: false }
            },
            {
                id: 'Y1',
                type: 'Output',
                inputs: { IN: 'mux1.Y' },
                outputs: { OUT: false }
            },
            {
                id: 'Y2',
                type: 'Output',
                inputs: { IN: 'mux2.Y' },
                outputs: { OUT: false }
            },
            {
                id: 'Y3',
                type: 'Output',
                inputs: { IN: 'mux3.Y' },
                outputs: { OUT: false }
            }
        ]
    },
    {
        id: 'MUX8',
        parts: [
            {
                id: 'A0',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'A1',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'A2',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'A3',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'A4',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'A5',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'A6',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'A7',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'B0',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'B1',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'B2',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'B3',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'B4',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'B5',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'B6',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'B7',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'SEL',
                type: 'Input',
                outputs: { OUT: false }
            },
            {
                id: 'mux0',
                type: 'MUX4',
                inputs: {
                    A0: 'A0.OUT', A1: 'A1.OUT', A2: 'A2.OUT', A3: 'A3.OUT',
                    B0: 'B0.OUT', B1: 'B1.OUT', B2: 'B2.OUT', B3: 'B3.OUT',
                    SEL: 'SEL.OUT'
                }
            },
            {
                id: 'mux1',
                type: 'MUX4',
                inputs: {
                    A0: 'A4.OUT', A1: 'A5.OUT', A2: 'A6.OUT', A3: 'A7.OUT',
                    B0: 'B4.OUT', B1: 'B5.OUT', B2: 'B6.OUT', B3: 'B7.OUT',
                    SEL: 'SEL.OUT'
                }
            },
            {
                id: 'Y0',
                type: 'Output',
                inputs: { IN: 'mux0.Y0' },
                outputs: { OUT: false }
            },
            {
                id: 'Y1',
                type: 'Output',
                inputs: { IN: 'mux0.Y1' },
                outputs: { OUT: false }
            },
            {
                id: 'Y2',
                type: 'Output',
                inputs: { IN: 'mux0.Y2' },
                outputs: { OUT: false }
            },
            {
                id: 'Y3',
                type: 'Output',
                inputs: { IN: 'mux0.Y3' },
                outputs: { OUT: false }
            },
            {
                id: 'Y4',
                type: 'Output',
                inputs: { IN: 'mux1.Y0' },
                outputs: { OUT: false }
            },
            {
                id: 'Y5',
                type: 'Output',
                inputs: { IN: 'mux1.Y1' },
                outputs: { OUT: false }
            },
            {
                id: 'Y6',
                type: 'Output',
                inputs: { IN: 'mux1.Y2' },
                outputs: { OUT: false }
            },
            {
                id: 'Y7',
                type: 'Output',
                inputs: { IN: 'mux1.Y3' },
                outputs: { OUT: false }
            }
        ]
    }
]