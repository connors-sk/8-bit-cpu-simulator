import { Circuit } from './types';

export const registers: Circuit[] = [
  {
    id: 'REGISTER1',
    parts: [
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
        id: 'and1',
        type: 'AND',
        inputs: { A: 'dff.Q', B: 'not1.OUT' }
      },
      {
        id: 'and2',
        type: 'AND',
        inputs: { A: 'LOAD.OUT', B: 'D.OUT' }
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
          '~SET': 'CONST_1',
          '~CLR': 'not2.OUT',
          D: 'or.OUT',
          CLK: 'CLK.OUT'
        }
      },
      {
        id: 'OUT',
        type: 'Output',
        inputs: { IN: 'dff.Q' },
        outputs: { OUT: false }
      }
    ]
  },
  {
    id: 'REGISTER2',
    parts: [
      {
        id: 'LOAD',
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
        id: 'register0',
        type: 'REGISTER1',
        inputs: {
          LOAD: 'LOAD.OUT',
          D: 'D0.OUT',
          CLK: 'CLK.OUT',
          CLR: 'CLR.OUT'
        }
      },
      {
        id: 'register1',
        type: 'REGISTER1',
        inputs: {
          LOAD: 'LOAD.OUT',
          D: 'D1.OUT',
          CLK: 'CLK.OUT',
          CLR: 'CLR.OUT'
        }
      },
      {
        id: 'OUT0',
        type: 'Output',
        inputs: { IN: 'register0.OUT' },
        outputs: { OUT: false }
      },
      {
        id: 'OUT1',
        type: 'Output',
        inputs: { IN: 'register1.OUT' },
        outputs: { OUT: false }
      }
    ]
  },
  {
    id: 'REGISTER4',
    parts: [
      {
        id: 'LOAD',
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
        id: 'register0',
        type: 'REGISTER2',
        inputs: {
          LOAD: 'LOAD.OUT',
          D0: 'D0.OUT',
          D1: 'D1.OUT',
          CLK: 'CLK.OUT',
          CLR: 'CLR.OUT'
        }
      },
      {
        id: 'register1',
        type: 'REGISTER2',
        inputs: {
          LOAD: 'LOAD.OUT',
          D0: 'D2.OUT',
          D1: 'D3.OUT',
          CLK: 'CLK.OUT',
          CLR: 'CLR.OUT'
        }
      },
      {
        id: 'OUT0',
        type: 'Output',
        inputs: { IN: 'register0.OUT0' },
        outputs: { OUT: false }
      },
      {
        id: 'OUT1',
        type: 'Output',
        inputs: { IN: 'register0.OUT1' },
        outputs: { OUT: false }
      },
      {
        id: 'OUT2',
        type: 'Output',
        inputs: { IN: 'register1.OUT0' },
        outputs: { OUT: false }
      },
      {
        id: 'OUT3',
        type: 'Output',
        inputs: { IN: 'register1.OUT1' },
        outputs: { OUT: false }
      }
    ]
  },
  {
    id: 'REGISTER8',
    parts: [
      {
        id: 'LOAD',
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
        id: 'register0',
        type: 'REGISTER4',
        inputs: {
          LOAD: 'LOAD.OUT',
          CLK: 'CLK.OUT',
          CLR: 'CLR.OUT',
          D0: 'D0.OUT',
          D1: 'D1.OUT',
          D2: 'D2.OUT',
          D3: 'D3.OUT'
        }
      },
      {
        id: 'register1',
        type: 'REGISTER4',
        inputs: {
          LOAD: 'LOAD.OUT',
          CLK: 'CLK.OUT',
          CLR: 'CLR.OUT',
          D0: 'D4.OUT',
          D1: 'D5.OUT',
          D2: 'D6.OUT',
          D3: 'D7.OUT'
        }
      },
      {
        id: 'OUT0',
        type: 'Output',
        inputs: { IN: 'register0.OUT0' },
        outputs: { OUT: false }
      },
      {
        id: 'OUT1',
        type: 'Output',
        inputs: { IN: 'register0.OUT1' },
        outputs: { OUT: false }
      },
      {
        id: 'OUT2',
        type: 'Output',
        inputs: { IN: 'register0.OUT2' },
        outputs: { OUT: false }
      },
      {
        id: 'OUT3',
        type: 'Output',
        inputs: { IN: 'register0.OUT3' },
        outputs: { OUT: false }
      },
      {
        id: 'OUT4',
        type: 'Output',
        inputs: { IN: 'register1.OUT0' },
        outputs: { OUT: false }
      },
      {
        id: 'OUT5',
        type: 'Output',
        inputs: { IN: 'register1.OUT1' },
        outputs: { OUT: false }
      },
      {
        id: 'OUT6',
        type: 'Output',
        inputs: { IN: 'register1.OUT2' },
        outputs: { OUT: false }
      },
      {
        id: 'OUT7',
        type: 'Output',
        inputs: { IN: 'register1.OUT3' },
        outputs: { OUT: false }
      }
    ]
  }
];
