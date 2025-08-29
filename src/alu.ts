import { Circuit } from './types';

export const alu: Circuit[] = [
  {
    id: 'ALU',
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
        id: 'SU',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'xor0',
        type: 'XOR',
        inputs: { A: 'SU.OUT', B: 'B0.OUT' }
      },
      {
        id: 'xor1',
        type: 'XOR',
        inputs: { A: 'SU.OUT', B: 'B1.OUT' }
      },
      {
        id: 'xor2',
        type: 'XOR',
        inputs: { A: 'SU.OUT', B: 'B2.OUT' }
      },
      {
        id: 'xor3',
        type: 'XOR',
        inputs: { A: 'SU.OUT', B: 'B3.OUT' }
      },
      {
        id: 'xor4',
        type: 'XOR',
        inputs: { A: 'SU.OUT', B: 'B4.OUT' }
      },
      {
        id: 'xor5',
        type: 'XOR',
        inputs: { A: 'SU.OUT', B: 'B5.OUT' }
      },
      {
        id: 'xor6',
        type: 'XOR',
        inputs: { A: 'SU.OUT', B: 'B6.OUT' }
      },
      {
        id: 'xor7',
        type: 'XOR',
        inputs: { A: 'SU.OUT', B: 'B7.OUT' }
      },
      {
        id: 'adder',
        type: 'ADDER8',
        inputs: {
          A0: 'A0.OUT',
          A1: 'A1.OUT',
          A2: 'A2.OUT',
          A3: 'A3.OUT',
          A4: 'A4.OUT',
          A5: 'A5.OUT',
          A6: 'A6.OUT',
          A7: 'A7.OUT',
          B0: 'xor0.OUT',
          B1: 'xor1.OUT',
          B2: 'xor2.OUT',
          B3: 'xor3.OUT',
          B4: 'xor4.OUT',
          B5: 'xor5.OUT',
          B6: 'xor6.OUT',
          B7: 'xor7.OUT',
          CI: 'SU.OUT'
        }
      },
      {
        id: 'SUM0',
        type: 'Output',
        inputs: { IN: 'adder.SUM0' },
        outputs: { OUT: false }
      },
      {
        id: 'SUM1',
        type: 'Output',
        inputs: { IN: 'adder.SUM1' },
        outputs: { OUT: false }
      },
      {
        id: 'SUM2',
        type: 'Output',
        inputs: { IN: 'adder.SUM2' },
        outputs: { OUT: false }
      },
      {
        id: 'SUM3',
        type: 'Output',
        inputs: { IN: 'adder.SUM3' },
        outputs: { OUT: false }
      },
      {
        id: 'SUM4',
        type: 'Output',
        inputs: { IN: 'adder.SUM4' },
        outputs: { OUT: false }
      },
      {
        id: 'SUM5',
        type: 'Output',
        inputs: { IN: 'adder.SUM5' },
        outputs: { OUT: false }
      },
      {
        id: 'SUM6',
        type: 'Output',
        inputs: { IN: 'adder.SUM6' },
        outputs: { OUT: false }
      },
      {
        id: 'SUM7',
        type: 'Output',
        inputs: { IN: 'adder.SUM7' },
        outputs: { OUT: false }
      },
      {
        id: 'CO',
        type: 'Output',
        inputs: { IN: 'adder.CO' },
        outputs: { OUT: false }
      }
    ]
  },
  {
    id: 'ISZERO',
    parts: [
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
        id: 'nor0',
        type: 'NOR',
        inputs: { A: 'D0.OUT', B: 'D1.OUT' }
      },
      {
        id: 'nor1',
        type: 'NOR',
        inputs: { A: 'D2.OUT', B: 'D3.OUT' }
      },
      {
        id: 'nor2',
        type: 'NOR',
        inputs: { A: 'D4.OUT', B: 'D5.OUT' }
      },
      {
        id: 'nor3',
        type: 'NOR',
        inputs: { A: 'D6.OUT', B: 'D7.OUT' }
      },
      {
        id: 'and0',
        type: 'AND',
        inputs: { A: 'nor0.OUT', B: 'nor1.OUT' }
      },
      {
        id: 'and1',
        type: 'AND',
        inputs: { A: 'nor2.OUT', B: 'nor3.OUT' }
      },
      {
        id: 'and2',
        type: 'AND',
        inputs: { A: 'and0.OUT', B: 'and1.OUT' }
      },
      {
        id: 'OUT',
        type: 'Output',
        inputs: { IN: 'and2.OUT' },
        outputs: { OUT: false }
      }
    ]
  }
];
