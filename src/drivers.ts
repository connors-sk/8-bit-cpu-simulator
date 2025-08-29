import { Circuit } from './types';

export const drivers: Circuit[] = [
  {
    id: 'TriState1',
    parts: [
      {
        id: 'IN',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'SEL',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'tri',
        type: 'TriState',
        inputs: { IN: 'IN.OUT', SEL: 'SEL.OUT' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT',
        type: 'Output',
        inputs: { IN: 'tri.OUT' },
        outputs: { OUT: 'X' }
      }
    ]
  },
  {
    id: 'TriState4',
    parts: [
      {
        id: 'IN0',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'IN1',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'IN2',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'IN3',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'SEL',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'tri0',
        type: 'TriState',
        inputs: { IN: 'IN0.OUT', SEL: 'SEL.OUT' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'tri1',
        type: 'TriState',
        inputs: { IN: 'IN1.OUT', SEL: 'SEL.OUT' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'tri2',
        type: 'TriState',
        inputs: { IN: 'IN2.OUT', SEL: 'SEL.OUT' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'tri3',
        type: 'TriState',
        inputs: { IN: 'IN3.OUT', SEL: 'SEL.OUT' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT0',
        type: 'Output',
        inputs: { IN: 'tri0.OUT' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT1',
        type: 'Output',
        inputs: { IN: 'tri1.OUT' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT2',
        type: 'Output',
        inputs: { IN: 'tri2.OUT' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT3',
        type: 'Output',
        inputs: { IN: 'tri3.OUT' },
        outputs: { OUT: 'X' }
      }
    ]
  },
  {
    id: 'TriState8',
    parts: [
      {
        id: 'IN0',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'IN1',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'IN2',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'IN3',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'IN4',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'IN5',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'IN6',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'IN7',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'SEL',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'tri0',
        type: 'TriState4',
        inputs: { IN0: 'IN0.OUT', IN1: 'IN1.OUT', IN2: 'IN2.OUT', IN3: 'IN3.OUT', SEL: 'SEL.OUT' },
      },
      {
        id: 'tri1',
        type: 'TriState4',
        inputs: { IN0: 'IN4.OUT', IN1: 'IN5.OUT', IN2: 'IN6.OUT', IN3: 'IN7.OUT', SEL: 'SEL.OUT' },
      },
      {
        id: 'OUT0',
        type: 'Output',
        inputs: { IN: 'tri0.OUT0' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT1',
        type: 'Output',
        inputs: { IN: 'tri0.OUT1' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT2',
        type: 'Output',
        inputs: { IN: 'tri0.OUT2' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT3',
        type: 'Output',
        inputs: { IN: 'tri0.OUT3' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT4',
        type: 'Output',
        inputs: { IN: 'tri1.OUT0' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT5',
        type: 'Output',
        inputs: { IN: 'tri1.OUT1' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT6',
        type: 'Output',
        inputs: { IN: 'tri1.OUT2' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT7',
        type: 'Output',
        inputs: { IN: 'tri1.OUT3' },
        outputs: { OUT: 'X' }
      }
    ]
  }
];
