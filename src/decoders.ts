import { Circuit } from "./types";

export const decoders: Circuit[] = [
    {
        id: 'DECODER3TO8',
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
                id: 'not0',
                type: 'NOT',
                inputs: { IN: 'A0.OUT' }
            },
            {
                id: 'not1',
                type: 'NOT',
                inputs: { IN: 'A1.OUT' }
            },
            {
                id: 'not2',
                type: 'NOT',
                inputs: { IN: 'A2.OUT' }
            },
            {
                id: 'and0',
                type: 'AND3',
                inputs: { A: 'not0.OUT', B: 'not1.OUT', C: 'not2.OUT' }
            },
            {
                id: 'and1',
                type: 'AND3',
                inputs: { A: 'A0.OUT', B: 'not1.OUT', C: 'not2.OUT' }
            },
            {
                id: 'and2',
                type: 'AND3',
                inputs: { A: 'not0.OUT', B: 'A1.OUT', C: 'not2.OUT' }
            },
            {
                id: 'and3',
                type: 'AND3',
                inputs: { A: 'A0.OUT', B: 'A1.OUT', C: 'not2.OUT' }
            },
            {
                id: 'and4',
                type: 'AND3',
                inputs: { A: 'not0.OUT', B: 'not1.OUT', C: 'A2.OUT' }
            },
            {
                id: 'and5',
                type: 'AND3',
                inputs: { A: 'A0.OUT', B: 'not1.OUT', C: 'A2.OUT' }
            },
            {
                id: 'and6',
                type: 'AND3',
                inputs: { A: 'not0.OUT', B: 'A1.OUT', C: 'A2.OUT' }
            },
            {
                id: 'and7',
                type: 'AND3',
                inputs: { A: 'A0.OUT', B: 'A1.OUT', C: 'A2.OUT' }
            },
            {
                id: 'Y0',
                type: 'Output',
                inputs: { IN: 'and0.OUT' },
                outputs: { OUT: false }
            },
            {
                id: 'Y1',
                type: 'Output',
                inputs: { IN: 'and1.OUT' },
                outputs: { OUT: false }
            },
            {
                id: 'Y2',
                type: 'Output',
                inputs: { IN: 'and2.OUT' },
                outputs: { OUT: false }
            },
            {
                id: 'Y3',
                type: 'Output',
                inputs: { IN: 'and3.OUT' },
                outputs: { OUT: false }
            },
            {
                id: 'Y4',
                type: 'Output',
                inputs: { IN: 'and4.OUT' },
                outputs: { OUT: false }
            },
            {
                id: 'Y5',
                type: 'Output',
                inputs: { IN: 'and5.OUT' },
                outputs: { OUT: false }
            },
            {
                id: 'Y6',
                type: 'Output',
                inputs: { IN: 'and6.OUT' },
                outputs: { OUT: false }
            },
            {
                id: 'Y7',
                type: 'Output',
                inputs: { IN: 'and7.OUT' },
                outputs: { OUT: false }
            }
        ]
    },
    {
        id: 'DECODER4TO16',
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
                id: 'not0',
                type: 'NOT',
                inputs: { IN: 'A0.OUT' }
            },
            {
                id: 'not1',
                type: 'NOT',
                inputs: { IN: 'A1.OUT' }
            },
            {
                id: 'not2',
                type: 'NOT',
                inputs: { IN: 'A2.OUT' }
            },
            {
                id: 'not3',
                type: 'NOT',
                inputs: { IN: 'A3.OUT' }
            },
            {
                id: 'and0',
                type: 'AND4',
                inputs: { A: 'not0.OUT', B: 'not1.OUT', C: 'not2.OUT', D: 'not3.OUT' }
            },
            {
                id: 'and1',
                type: 'AND4',
                inputs: { A: 'A0.OUT', B: 'not1.OUT', C: 'not2.OUT', D: 'not3.OUT' }
            },
            {
                id: 'and2',
                type: 'AND4',
                inputs: { A: 'not0.OUT', B: 'A1.OUT', C: 'not2.OUT', D: 'not3.OUT' }
            },
            {
                id: 'and3',
                type: 'AND4',
                inputs: { A: 'A0.OUT', B: 'A1.OUT', C: 'not2.OUT', D: 'not3.OUT' }
            },
            {
                id: 'and4',
                type: 'AND4',
                inputs: { A: 'not0.OUT', B: 'not1.OUT', C: 'A2.OUT', D: 'not3.OUT' }
            },
            {
                id: 'and5',
                type: 'AND4',
                inputs: { A: 'A0.OUT', B: 'not1.OUT', C: 'A2.OUT', D: 'not3.OUT' }
            },
            {
                id: 'and6',
                type: 'AND4',
                inputs: { A: 'not0.OUT', B: 'A1.OUT', C: 'A2.OUT', D: 'not3.OUT' }
            },
            {
                id: 'and7',
                type: 'AND4',
                inputs: { A: 'A0.OUT', B: 'A1.OUT', C: 'A2.OUT', D: 'not3.OUT' }
            },
            {
                id: 'and8',
                type: 'AND4',
                inputs: { A: 'not0.OUT', B: 'not1.OUT', C: 'not2.OUT', D: 'A3.OUT' }
            },
            {
                id: 'and9',
                type: 'AND4',
                inputs: { A: 'A0.OUT', B: 'not1.OUT', C: 'not2.OUT', D: 'A3.OUT' }
            },
            {
                id: 'and10',
                type: 'AND4',
                inputs: { A: 'not0.OUT', B: 'A1.OUT', C: 'not2.OUT', D: 'A3.OUT' }
            },
            {
                id: 'and11',
                type: 'AND4',
                inputs: { A: 'A0.OUT', B: 'A1.OUT', C: 'not2.OUT', D: 'A3.OUT' }
            },
            {
                id: 'and12',
                type: 'AND4',
                inputs: { A: 'not0.OUT', B: 'not1.OUT', C: 'A2.OUT', D: 'A3.OUT' }
            },
            {
                id: 'and13',
                type: 'AND4',
                inputs: { A: 'A0.OUT', B: 'not1.OUT', C: 'A2.OUT', D: 'A3.OUT' }
            },
            {
                id: 'and14',
                type: 'AND4',
                inputs: { A: 'not0.OUT', B: 'A1.OUT', C: 'A2.OUT', D: 'A3.OUT' }
            },
            {
                id: 'and15',
                type: 'AND4',
                inputs: { A: 'A0.OUT', B: 'A1.OUT', C: 'A2.OUT', D: 'A3.OUT' }
            },
            {
                id: 'Y0',
                type: 'Output',
                inputs: { IN: 'and0.OUT' },
                outputs: { OUT: false }
            },
            {
                id: 'Y1',
                type: 'Output',
                inputs: { IN: 'and1.OUT' },
                outputs: { OUT: false }
            },
            {
                id: 'Y2',
                type: 'Output',
                inputs: { IN: 'and2.OUT' },
                outputs: { OUT: false }
            },
            {
                id: 'Y3',
                type: 'Output',
                inputs: { IN: 'and3.OUT' },
                outputs: { OUT: false }
            },
            {
                id: 'Y4',
                type: 'Output',
                inputs: { IN: 'and4.OUT' },
                outputs: { OUT: false }
            },
            {
                id: 'Y5',
                type: 'Output',
                inputs: { IN: 'and5.OUT' },
                outputs: { OUT: false }
            },
            {
                id: 'Y6',
                type: 'Output',
                inputs: { IN: 'and6.OUT' },
                outputs: { OUT: false }
            },
            {
                id: 'Y7',
                type: 'Output',
                inputs: { IN: 'and7.OUT' },
                outputs: { OUT: false }
            },
            {
                id: 'Y8',
                type: 'Output',
                inputs: { IN: 'and8.OUT' },
                outputs: { OUT: false }
            },
            {
                id: 'Y9',
                type: 'Output',
                inputs: { IN: 'and9.OUT' },
                outputs: { OUT: false }
            },
            {
                id: 'Y10',
                type: 'Output',
                inputs: { IN: 'and10.OUT' },
                outputs: { OUT: false }
            },
            {
                id: 'Y11',
                type: 'Output',
                inputs: { IN: 'and11.OUT' },
                outputs: { OUT: false }
            },
            {
                id: 'Y12',
                type: 'Output',
                inputs: { IN: 'and12.OUT' },
                outputs: { OUT: false }
            },
            {
                id: 'Y13',
                type: 'Output',
                inputs: { IN: 'and13.OUT' },
                outputs: { OUT: false }
            },
            {
                id: 'Y14',
                type: 'Output',
                inputs: { IN: 'and14.OUT' },
                outputs: { OUT: false }
            },
            {
                id: 'Y15',
                type: 'Output',
                inputs: { IN: 'and15.OUT' },
                outputs: { OUT: false }
            }
        ]
    }
]