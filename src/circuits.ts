import { alu } from './alu';
import { decoders } from './decoders';
import { drivers } from './drivers';
import { indexBy } from './helpers';
import { latches } from './latches';
import { modules } from './modules';
import { mux } from './mux';
import { ram } from './ram';
import { registers } from './registers';
import { Circuit } from './types';

const circuits: Circuit[] = [
  {
    id: 'NAND3',
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
        id: 'C',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'nand1',
        type: 'NAND',
        inputs: { A: 'A.OUT', B: 'B.OUT' },
        outputs: { OUT: true }
      },
      {
        id: 'nand2',
        type: 'NAND',
        inputs: { A: 'nand1.OUT', B: 'nand1.OUT' },
        outputs: { OUT: false }
      },
      {
        id: 'nand3',
        type: 'NAND',
        inputs: { A: 'nand2.OUT', B: 'C.OUT' },
        outputs: { OUT: true }
      },
      {
        id: 'OUT',
        type: 'Output',
        inputs: { IN: 'nand3.OUT' },
        outputs: { OUT: true }
      }
    ]
  },
  {
    id: 'AND',
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
        id: 'nand1',
        type: 'NAND',
        inputs: { A: 'A.OUT', B: 'B.OUT' },
        outputs: { OUT: true }
      },
      {
        id: 'nand2',
        type: 'NAND',
        inputs: { A: 'nand1.OUT', B: 'nand1.OUT' },
        outputs: { OUT: false }
      },
      {
        id: 'OUT',
        type: 'Output',
        inputs: { IN: 'nand2.OUT' },
        outputs: { OUT: false }
      }
    ]
  },
  {
    id: 'AND3',
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
        id: 'C',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'and0',
        type: 'AND',
        inputs: { A: 'A.OUT', B: 'B.OUT' }
      },
      {
        id: 'and1',
        type: 'AND',
        inputs: { A: 'C.OUT', B: 'and0.OUT' }
      },
      {
        id: 'OUT',
        type: 'Output',
        inputs: { IN: 'and1.OUT' },
        outputs: { OUT: false }
      }
    ]
  },
  {
    id: 'AND4',
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
        id: 'C',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'D',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'and0',
        type: 'AND',
        inputs: { A: 'A.OUT', B: 'B.OUT' }
      },
      {
        id: 'and1',
        type: 'AND',
        inputs: { A: 'C.OUT', B: 'and0.OUT' }
      },
      {
        id: 'and2',
        type: 'AND',
        inputs: { A: 'D.OUT', B: 'and1.OUT' }
      },
      {
        id: 'OUT',
        type: 'Output',
        inputs: { IN: 'and2.OUT' },
        outputs: { OUT: false }
      }
    ]
  },
  {
    id: 'OR',
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
        id: 'nand1',
        type: 'NAND',
        inputs: { A: 'A.OUT', B: 'A.OUT' },
        outputs: { OUT: true }
      },
      {
        id: 'nand2',
        type: 'NAND',
        inputs: { A: 'B.OUT', B: 'B.OUT' },
        outputs: { OUT: true }
      },
      {
        id: 'nand3',
        type: 'NAND',
        inputs: { A: 'nand1.OUT', B: 'nand2.OUT' },
        outputs: { OUT: false }
      },
      {
        id: 'OUT',
        type: 'Output',
        inputs: { IN: 'nand3.OUT' },
        outputs: { OUT: false }
      }
    ]
  },
  {
    id: 'OR4',
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
        id: 'C',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'D',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'or0',
        type: 'OR',
        inputs: { A: 'A.OUT', B: 'B.OUT' }
      },
      {
        id: 'or1',
        type: 'OR',
        inputs: { A: 'C.OUT', B: 'or0.OUT' }
      },
      {
        id: 'or2',
        type: 'OR',
        inputs: { A: 'D.OUT', B: 'or1.OUT' }
      },
      {
        id: 'OUT',
        type: 'Output',
        inputs: { IN: 'or2.OUT' },
        outputs: { OUT: false }
      }
    ]
  },
  {
    id: 'OR3',
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
        id: 'C',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'or0',
        type: 'OR',
        inputs: { A: 'A.OUT', B: 'B.OUT' }
      },
      {
        id: 'or1',
        type: 'OR',
        inputs: { A: 'C.OUT', B: 'or0.OUT' }
      },
      {
        id: 'OUT',
        type: 'Output',
        inputs: { IN: 'or1.OUT' },
        outputs: { OUT: false }
      }
    ]
  },
  {
    id: 'OR5',
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
        id: 'C',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'D',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'E',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'or0',
        type: 'OR',
        inputs: { A: 'A.OUT', B: 'B.OUT' }
      },
      {
        id: 'or1',
        type: 'OR',
        inputs: { A: 'C.OUT', B: 'or0.OUT' }
      },
      {
        id: 'or2',
        type: 'OR',
        inputs: { A: 'D.OUT', B: 'or1.OUT' }
      },
      {
        id: 'or3',
        type: 'OR',
        inputs: { A: 'E.OUT', B: 'or2.OUT' }
      },
      {
        id: 'OUT',
        type: 'Output',
        inputs: { IN: 'or3.OUT' },
        outputs: { OUT: false }
      }
    ]
  },
  {
    id: 'OR8',
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
        id: 'C',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'D',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'E',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'F',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'G',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'H',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'or0',
        type: 'OR',
        inputs: { A: 'A.OUT', B: 'B.OUT' }
      },
      {
        id: 'or1',
        type: 'OR',
        inputs: { A: 'C.OUT', B: 'or0.OUT' }
      },
      {
        id: 'or2',
        type: 'OR',
        inputs: { A: 'D.OUT', B: 'or1.OUT' }
      },
      {
        id: 'or3',
        type: 'OR',
        inputs: { A: 'E.OUT', B: 'or2.OUT' }
      },
      {
        id: 'or4',
        type: 'OR',
        inputs: { A: 'F.OUT', B: 'or3.OUT' }
      },
      {
        id: 'or5',
        type: 'OR',
        inputs: { A: 'G.OUT', B: 'or4.OUT' }
      },
      {
        id: 'or6',
        type: 'OR',
        inputs: { A: 'H.OUT', B: 'or5.OUT' }
      },
      {
        id: 'OUT',
        type: 'Output',
        inputs: { IN: 'or6.OUT' },
        outputs: { OUT: false }
      }
    ]
  },
  {
    id: 'NOR',
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
        id: 'nand1',
        type: 'NAND',
        inputs: { A: 'A.OUT', B: 'A.OUT' },
        outputs: { OUT: true }
      },
      {
        id: 'nand2',
        type: 'NAND',
        inputs: { A: 'B.OUT', B: 'B.OUT' },
        outputs: { OUT: true }
      },
      {
        id: 'nand3',
        type: 'NAND',
        inputs: { A: 'nand1.OUT', B: 'nand2.OUT' },
        outputs: { OUT: false }
      },
      {
        id: 'nand4',
        type: 'NAND',
        inputs: { A: 'nand3.OUT', B: 'nand3.OUT' },
        outputs: { OUT: true }
      },
      {
        id: 'OUT',
        type: 'Output',
        inputs: { IN: 'nand4.OUT' },
        outputs: { OUT: true }
      }
    ]
  },
  {
    id: 'XOR',
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
        id: 'nand1',
        type: 'NAND',
        inputs: { A: 'A.OUT', B: 'B.OUT' },
        outputs: { OUT: true }
      },
      {
        id: 'nand2',
        type: 'NAND',
        inputs: { A: 'A.OUT', B: 'nand1.OUT' },
        outputs: { OUT: true }
      },
      {
        id: 'nand3',
        type: 'NAND',
        inputs: { A: 'B.OUT', B: 'nand1.OUT' },
        outputs: { OUT: true }
      },
      {
        id: 'nand4',
        type: 'NAND',
        inputs: { A: 'nand2.OUT', B: 'nand3.OUT' },
        outputs: { OUT: false }
      },
      {
        id: 'OUT',
        type: 'Output',
        inputs: { IN: 'nand4.OUT' },
        outputs: { OUT: false }
      }
    ]
  },
  {
    id: 'NOT',
    parts: [
      {
        id: 'IN',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'nand',
        type: 'NAND',
        inputs: { A: 'IN.OUT', B: 'IN.OUT' },
        outputs: { OUT: true }
      },
      {
        id: 'OUT',
        type: 'Output',
        inputs: { IN: 'nand.OUT' },
        outputs: { OUT: true }
      }
    ]
  },
  {
    id: 'HALFADDER',
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
        id: 'xor',
        type: 'XOR',
        inputs: { A: 'A.OUT', B: 'B.OUT' }
      },
      {
        id: 'and',
        type: 'AND',
        inputs: { A: 'A.OUT', B: 'B.OUT' }
      },
      {
        id: 'S',
        type: 'Output',
        inputs: { IN: 'xor.OUT' },
        outputs: { OUT: false }
      },
      {
        id: 'CO',
        type: 'Output',
        inputs: { IN: 'and.OUT' },
        outputs: { OUT: false }
      }
    ]
  },
  {
    id: 'FULLADDER',
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
        id: 'CI',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'halfAdder1',
        type: 'HALFADDER',
        inputs: { A: 'A.OUT', B: 'B.OUT' }
      },
      {
        id: 'halfAdder2',
        type: 'HALFADDER',
        inputs: { A: 'CI.OUT', B: 'halfAdder1.S' }
      },
      {
        id: 'or',
        type: 'OR',
        inputs: { A: 'halfAdder1.CO', B: 'halfAdder2.CO' }
      },
      {
        id: 'S',
        type: 'Output',
        inputs: { IN: 'halfAdder2.S' },
        outputs: { OUT: false }
      },
      {
        id: 'CO',
        type: 'Output',
        inputs: { IN: 'or.OUT' },
        outputs: { OUT: false }
      }
    ]
  },
  {
    id: 'ADDER4',
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
        id: 'CI',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'fullAdder0',
        type: 'FULLADDER',
        inputs: { A: 'A0.OUT', B: 'B0.OUT', CI: 'CI.OUT' }
      },
      {
        id: 'fullAdder1',
        type: 'FULLADDER',
        inputs: { A: 'A1.OUT', B: 'B1.OUT', CI: 'fullAdder0.CO' }
      },
      {
        id: 'fullAdder2',
        type: 'FULLADDER',
        inputs: { A: 'A2.OUT', B: 'B2.OUT', CI: 'fullAdder1.CO' }
      },
      {
        id: 'fullAdder3',
        type: 'FULLADDER',
        inputs: { A: 'A3.OUT', B: 'B3.OUT', CI: 'fullAdder2.CO' }
      },
      {
        id: 'SUM0',
        type: 'Output',
        inputs: { IN: 'fullAdder0.S' },
        outputs: { OUT: false }
      },
      {
        id: 'SUM1',
        type: 'Output',
        inputs: { IN: 'fullAdder1.S' },
        outputs: { OUT: false }
      },
      {
        id: 'SUM2',
        type: 'Output',
        inputs: { IN: 'fullAdder2.S' },
        outputs: { OUT: false }
      },
      {
        id: 'SUM3',
        type: 'Output',
        inputs: { IN: 'fullAdder3.S' },
        outputs: { OUT: false }
      },
      {
        id: 'CO',
        type: 'Output',
        inputs: { IN: 'fullAdder3.CO' },
        outputs: { OUT: false }
      }
    ]
  },
  {
    id: 'ADDER8',
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
        id: 'CI',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'adder0',
        type: 'ADDER4',
        inputs: {
          A0: 'A0.OUT',
          A1: 'A1.OUT',
          A2: 'A2.OUT',
          A3: 'A3.OUT',
          B0: 'B0.OUT',
          B1: 'B1.OUT',
          B2: 'B2.OUT',
          B3: 'B3.OUT',
          CI: 'CI.OUT'
        }
      },
      {
        id: 'adder1',
        type: 'ADDER4',
        inputs: {
          A0: 'A4.OUT',
          A1: 'A5.OUT',
          A2: 'A6.OUT',
          A3: 'A7.OUT',
          B0: 'B4.OUT',
          B1: 'B5.OUT',
          B2: 'B6.OUT',
          B3: 'B7.OUT',
          CI: 'adder0.CO'
        }
      },
      {
        id: 'SUM0',
        type: 'Output',
        inputs: { IN: 'adder0.SUM0' },
        outputs: { OUT: false }
      },
      {
        id: 'SUM1',
        type: 'Output',
        inputs: { IN: 'adder0.SUM1' },
        outputs: { OUT: false }
      },
      {
        id: 'SUM2',
        type: 'Output',
        inputs: { IN: 'adder0.SUM2' },
        outputs: { OUT: false }
      },
      {
        id: 'SUM3',
        type: 'Output',
        inputs: { IN: 'adder0.SUM3' },
        outputs: { OUT: false }
      },
      {
        id: 'SUM4',
        type: 'Output',
        inputs: { IN: 'adder1.SUM0' },
        outputs: { OUT: false }
      },
      {
        id: 'SUM5',
        type: 'Output',
        inputs: { IN: 'adder1.SUM1' },
        outputs: { OUT: false }
      },
      {
        id: 'SUM6',
        type: 'Output',
        inputs: { IN: 'adder1.SUM2' },
        outputs: { OUT: false }
      },
      {
        id: 'SUM7',
        type: 'Output',
        inputs: { IN: 'adder1.SUM3' },
        outputs: { OUT: false }
      },
      {
        id: 'CO',
        type: 'Output',
        inputs: { IN: 'adder1.CO' },
        outputs: { OUT: false }
      }
    ]
  },
  {
    id: 'DFF',
    parts: [
      {
        id: '~SET',
        type: 'Input',
        outputs: { OUT: true }
      },
      {
        id: '~CLR',
        type: 'Input',
        outputs: { OUT: true }
      },
      {
        id: 'CLK',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'D',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'nand1',
        type: 'NAND3',
        inputs: { A: '~SET.OUT', B: 'nand4.OUT', C: 'nand2.OUT' }
      },
      {
        id: 'nand2',
        type: 'NAND3',
        inputs: { A: 'nand1.OUT', B: '~CLR.OUT', C: 'CLK.OUT' }
      },
      {
        id: 'nand3',
        type: 'NAND3',
        inputs: { A: 'nand2.OUT', B: 'CLK.OUT', C: 'nand4.OUT' }
      },
      {
        id: 'nand4',
        type: 'NAND3',
        inputs: { A: 'nand3.OUT', B: '~CLR.OUT', C: 'D.OUT' }
      },
      {
        id: 'nand5',
        type: 'NAND3',
        inputs: { A: '~SET.OUT', B: 'nand2.OUT', C: 'nand6.OUT' }
      },
      {
        id: 'nand6',
        type: 'NAND3',
        inputs: { A: 'nand5.OUT', B: '~CLR.OUT', C: 'nand3.OUT' }
      },
      {
        id: 'Q',
        type: 'Output',
        inputs: { IN: 'nand5.OUT' },
        outputs: { OUT: false }
      },
      {
        id: '~Q',
        type: 'Output',
        inputs: { IN: 'nand6.OUT' },
        outputs: { OUT: false }
      }
    ]
  },
  {
    id: 'JKFF',
    parts: [
      {
        id: '~SET',
        type: 'Input',
        outputs: { OUT: true }
      },
      {
        id: '~CLR',
        type: 'Input',
        outputs: { OUT: true }
      },
      {
        id: 'CLK',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'J',
        type: 'Input',
        outputs: { OUT: true }
      },
      {
        id: 'K',
        type: 'Input',
        outputs: { OUT: true }
      },
      {
        id: 'not1',
        type: 'NOT',
        inputs: { IN: 'K.OUT' }
      },
      {
        id: 'and1',
        type: 'AND',
        inputs: { A: 'dff.~Q', B: 'J.OUT' }
      },
      {
        id: 'and2',
        type: 'AND',
        inputs: { A: 'not1.OUT', B: 'dff.Q' }
      },
      {
        id: 'or',
        type: 'OR',
        inputs: { A: 'and1.OUT', B: 'and2.OUT' }
      },
      {
        id: 'dff',
        type: 'DFF',
        inputs: {
          '~SET': '~SET.OUT',
          '~CLR': '~CLR.OUT',
          D: 'or.OUT',
          CLK: 'CLK.OUT'
        }
      },
      {
        id: 'Q',
        type: 'Output',
        inputs: { IN: 'dff.Q' },
        outputs: { OUT: false }
      },
      {
        id: '~Q',
        type: 'Output',
        inputs: { IN: 'dff.~Q' },
        outputs: { OUT: false }
      }
    ]
  },
  {
    id: 'COUNTER1',
    parts: [
      {
        id: 'ENABLE',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'LOAD',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'D',
        type: 'Input',
        outputs: { OUT: false }
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
        id: 'not1',
        type: 'NOT',
        inputs: { IN: 'LOAD.OUT' }
      },
      {
        id: 'not2',
        type: 'NOT',
        inputs: { IN: 'CLR.OUT' }
      },
      {
        id: 'not3',
        type: 'NOT',
        inputs: { IN: 'D.OUT' }
      },
      {
        id: 'and1',
        type: 'AND',
        inputs: { A: 'D.OUT', B: 'LOAD.OUT' }
      },
      {
        id: 'and2',
        type: 'AND',
        inputs: { A: 'not1.OUT', B: 'ENABLE.OUT' }
      },
      {
        id: 'and3',
        type: 'AND',
        inputs: { A: 'LOAD.OUT', B: 'not3.OUT' }
      },
      {
        id: 'or1',
        type: 'OR',
        inputs: { A: 'and1.OUT', B: 'and2.OUT' }
      },
      {
        id: 'or2',
        type: 'OR',
        inputs: { A: 'and2.OUT', B: 'and3.OUT' }
      },
      {
        id: 'jk',
        type: 'JKFF',
        inputs: {
          J: 'or1.OUT',
          K: 'or2.OUT',
          CLK: 'CLK.OUT',
          '~SET': 'CONST_1',
          '~CLR': 'not2.OUT'
        }
      },
      {
        id: 'Q',
        type: 'Output',
        inputs: { IN: 'jk.Q' },
        outputs: { OUT: false }
      }
    ]
  },
  {
    id: 'COUNTER4',
    parts: [
      {
        id: 'CLK',
        type: 'Input',
        outputs: { OUT: false }
      },
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
        id: 'C',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'D',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'ENABLE',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'LOAD',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'CLR',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'and1',
        type: 'AND',
        inputs: { A: 'ENABLE.OUT', B: 'counter0.Q' }
      },
      {
        id: 'and2',
        type: 'AND',
        inputs: { A: 'and1.OUT', B: 'counter1.Q' }
      },
      {
        id: 'and3',
        type: 'AND',
        inputs: { A: 'and2.OUT', B: 'counter2.Q' }
      },
      {
        id: 'counter0',
        type: 'COUNTER1',
        inputs: {
          ENABLE: 'ENABLE.OUT',
          D: 'A.OUT',
          LOAD: 'LOAD.OUT',
          CLK: 'CLK.OUT',
          CLR: 'CLR.OUT'
        }
      },
      {
        id: 'counter1',
        type: 'COUNTER1',
        inputs: {
          ENABLE: 'and1.OUT',
          D: 'B.OUT',
          LOAD: 'LOAD.OUT',
          CLK: 'CLK.OUT',
          CLR: 'CLR.OUT'
        }
      },
      {
        id: 'counter2',
        type: 'COUNTER1',
        inputs: {
          ENABLE: 'and2.OUT',
          D: 'C.OUT',
          LOAD: 'LOAD.OUT',
          CLK: 'CLK.OUT',
          CLR: 'CLR.OUT'
        }
      },
      {
        id: 'counter3',
        type: 'COUNTER1',
        inputs: {
          ENABLE: 'and3.OUT',
          D: 'D.OUT',
          LOAD: 'LOAD.OUT',
          CLK: 'CLK.OUT',
          CLR: 'CLR.OUT'
        }
      },
      {
        id: 'Q0',
        type: 'Output',
        inputs: { IN: 'counter0.Q' },
        outputs: { OUT: false }
      },
      {
        id: 'Q1',
        type: 'Output',
        inputs: { IN: 'counter1.Q' },
        outputs: { OUT: false }
      },
      {
        id: 'Q2',
        type: 'Output',
        inputs: { IN: 'counter2.Q' },
        outputs: { OUT: false }
      },
      {
        id: 'Q3',
        type: 'Output',
        inputs: { IN: 'counter3.Q' },
        outputs: { OUT: false }
      }
    ]
  },
  ...latches,
  ...mux,
  ...ram,
  ...drivers,
  ...alu,
  ...registers,
  ...decoders,
  ...modules,
];

export const circuitsLookup = indexBy(circuits, 'id');
