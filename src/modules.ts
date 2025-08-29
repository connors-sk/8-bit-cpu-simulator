import { Circuit } from './types';

export const modules: Circuit[] = [
  {
    id: 'PC',
    parts: [
      {
        id: 'CLR',
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
        id: 'CE',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'CLK',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'J',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'CO',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'counter',
        type: 'COUNTER4',
        inputs: {
          A: 'A.OUT',
          B: 'B.OUT',
          C: 'C.OUT',
          D: 'D.OUT',
          CLK: 'CLK.OUT',
          CLR: 'CLR.OUT',
          LOAD: 'J.OUT',
          ENABLE: 'CE.OUT'
        }
      },
      {
        id: 'tri',
        type: 'TriState8',
        inputs: {
          SEL: 'CO.OUT',
          IN0: 'counter.Q0',
          IN1: 'counter.Q1',
          IN2: 'counter.Q2',
          IN3: 'counter.Q3',
          IN4: 'CONST_0',
          IN5: 'CONST_0',
          IN6: 'CONST_0',
          IN7: 'CONST_0'
        }
      },
      {
        id: 'PC0',
        type: 'Output',
        inputs: { IN: 'counter.Q0' },
        outputs: { OUT: false }
      },
      {
        id: 'PC1',
        type: 'Output',
        inputs: { IN: 'counter.Q1' },
        outputs: { OUT: false }
      },
      {
        id: 'PC2',
        type: 'Output',
        inputs: { IN: 'counter.Q2' },
        outputs: { OUT: false }
      },
      {
        id: 'PC3',
        type: 'Output',
        inputs: { IN: 'counter.Q3' },
        outputs: { OUT: false }
      },
      {
        id: 'OUT0',
        type: 'Output',
        inputs: { IN: 'tri.OUT0' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT1',
        type: 'Output',
        inputs: { IN: 'tri.OUT1' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT2',
        type: 'Output',
        inputs: { IN: 'tri.OUT2' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT3',
        type: 'Output',
        inputs: { IN: 'tri.OUT3' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT4',
        type: 'Output',
        inputs: { IN: 'tri.OUT4' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT5',
        type: 'Output',
        inputs: { IN: 'tri.OUT5' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT6',
        type: 'Output',
        inputs: { IN: 'tri.OUT6' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT7',
        type: 'Output',
        inputs: { IN: 'tri.OUT7' },
        outputs: { OUT: 'X' }
      }
    ]
  },
  {
    id: 'REGISTERA',
    parts: [
      {
        id: 'CLR',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'CLK',
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
        id: 'AO',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'AI',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'register',
        type: 'REGISTER8',
        inputs: {
          D0: 'D0.OUT',
          D1: 'D1.OUT',
          D2: 'D2.OUT',
          D3: 'D3.OUT',
          D4: 'D4.OUT',
          D5: 'D5.OUT',
          D6: 'D6.OUT',
          D7: 'D7.OUT',
          LOAD: 'AI.OUT',
          CLK: 'CLK.OUT',
          CLR: 'CLR.OUT'
        }
      },
      {
        id: 'tri',
        type: 'TriState8',
        inputs: {
          SEL: 'AO.OUT',
          IN0: 'register.OUT0',
          IN1: 'register.OUT1',
          IN2: 'register.OUT2',
          IN3: 'register.OUT3',
          IN4: 'register.OUT4',
          IN5: 'register.OUT5',
          IN6: 'register.OUT6',
          IN7: 'register.OUT7'
        }
      },
      {
        id: 'REGA0',
        type: 'Output',
        inputs: { IN: 'register.OUT0' },
        outputs: { OUT: false }
      },
      {
        id: 'REGA1',
        type: 'Output',
        inputs: { IN: 'register.OUT1' },
        outputs: { OUT: false }
      },
      {
        id: 'REGA2',
        type: 'Output',
        inputs: { IN: 'register.OUT2' },
        outputs: { OUT: false }
      },
      {
        id: 'REGA3',
        type: 'Output',
        inputs: { IN: 'register.OUT3' },
        outputs: { OUT: false }
      },
      {
        id: 'REGA4',
        type: 'Output',
        inputs: { IN: 'register.OUT4' },
        outputs: { OUT: false }
      },
      {
        id: 'REGA5',
        type: 'Output',
        inputs: { IN: 'register.OUT5' },
        outputs: { OUT: false }
      },
      {
        id: 'REGA6',
        type: 'Output',
        inputs: { IN: 'register.OUT6' },
        outputs: { OUT: false }
      },
      {
        id: 'REGA7',
        type: 'Output',
        inputs: { IN: 'register.OUT7' },
        outputs: { OUT: false }
      },
      {
        id: 'OUT0',
        type: 'Output',
        inputs: { IN: 'tri.OUT0' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT1',
        type: 'Output',
        inputs: { IN: 'tri.OUT1' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT2',
        type: 'Output',
        inputs: { IN: 'tri.OUT2' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT3',
        type: 'Output',
        inputs: { IN: 'tri.OUT3' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT4',
        type: 'Output',
        inputs: { IN: 'tri.OUT4' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT5',
        type: 'Output',
        inputs: { IN: 'tri.OUT5' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT6',
        type: 'Output',
        inputs: { IN: 'tri.OUT6' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT7',
        type: 'Output',
        inputs: { IN: 'tri.OUT7' },
        outputs: { OUT: 'X' }
      }
    ]
  },
  {
    id: 'REGISTERB',
    parts: [
      {
        id: 'CLR',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'CLK',
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
        id: 'BO',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'BI',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'register',
        type: 'REGISTER8',
        inputs: {
          D0: 'D0.OUT',
          D1: 'D1.OUT',
          D2: 'D2.OUT',
          D3: 'D3.OUT',
          D4: 'D4.OUT',
          D5: 'D5.OUT',
          D6: 'D6.OUT',
          D7: 'D7.OUT',
          LOAD: 'BI.OUT',
          CLK: 'CLK.OUT',
          CLR: 'CLR.OUT'
        }
      },
      {
        id: 'tri',
        type: 'TriState8',
        inputs: {
          SEL: 'BO.OUT',
          IN0: 'register.OUT0',
          IN1: 'register.OUT1',
          IN2: 'register.OUT2',
          IN3: 'register.OUT3',
          IN4: 'register.OUT4',
          IN5: 'register.OUT5',
          IN6: 'register.OUT6',
          IN7: 'register.OUT7'
        }
      },
      {
        id: 'REGB0',
        type: 'Output',
        inputs: { IN: 'register.OUT0' },
        outputs: { OUT: false }
      },
      {
        id: 'REGB1',
        type: 'Output',
        inputs: { IN: 'register.OUT1' },
        outputs: { OUT: false }
      },
      {
        id: 'REGB2',
        type: 'Output',
        inputs: { IN: 'register.OUT2' },
        outputs: { OUT: false }
      },
      {
        id: 'REGB3',
        type: 'Output',
        inputs: { IN: 'register.OUT3' },
        outputs: { OUT: false }
      },
      {
        id: 'REGB4',
        type: 'Output',
        inputs: { IN: 'register.OUT4' },
        outputs: { OUT: false }
      },
      {
        id: 'REGB5',
        type: 'Output',
        inputs: { IN: 'register.OUT5' },
        outputs: { OUT: false }
      },
      {
        id: 'REGB6',
        type: 'Output',
        inputs: { IN: 'register.OUT6' },
        outputs: { OUT: false }
      },
      {
        id: 'REGB7',
        type: 'Output',
        inputs: { IN: 'register.OUT7' },
        outputs: { OUT: false }
      },
      {
        id: 'OUT0',
        type: 'Output',
        inputs: { IN: 'tri.OUT0' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT1',
        type: 'Output',
        inputs: { IN: 'tri.OUT1' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT2',
        type: 'Output',
        inputs: { IN: 'tri.OUT2' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT3',
        type: 'Output',
        inputs: { IN: 'tri.OUT3' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT4',
        type: 'Output',
        inputs: { IN: 'tri.OUT4' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT5',
        type: 'Output',
        inputs: { IN: 'tri.OUT5' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT6',
        type: 'Output',
        inputs: { IN: 'tri.OUT6' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT7',
        type: 'Output',
        inputs: { IN: 'tri.OUT7' },
        outputs: { OUT: 'X' }
      }
    ]
  },
  {
    id: 'SUMREGISTER',
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
        id: 'EO',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'alu',
        type: 'ALU',
        inputs: {
          A0: 'A0.OUT',
          A1: 'A1.OUT',
          A2: 'A2.OUT',
          A3: 'A3.OUT',
          A4: 'A4.OUT',
          A5: 'A5.OUT',
          A6: 'A6.OUT',
          A7: 'A7.OUT',
          B0: 'B0.OUT',
          B1: 'B1.OUT',
          B2: 'B2.OUT',
          B3: 'B3.OUT',
          B4: 'B4.OUT',
          B5: 'B5.OUT',
          B6: 'B6.OUT',
          B7: 'B7.OUT',
          SU: 'SU.OUT'
        }
      },
      {
        id: 'tri',
        type: 'TriState8',
        inputs: {
          SEL: 'EO.OUT',
          IN0: 'alu.SUM0',
          IN1: 'alu.SUM1',
          IN2: 'alu.SUM2',
          IN3: 'alu.SUM3',
          IN4: 'alu.SUM4',
          IN5: 'alu.SUM5',
          IN6: 'alu.SUM6',
          IN7: 'alu.SUM7'
        }
      },
      {
        id: 'isZero',
        type: 'ISZERO',
        inputs: {
          D0: 'alu.SUM0',
          D1: 'alu.SUM1',
          D2: 'alu.SUM2',
          D3: 'alu.SUM3',
          D4: 'alu.SUM4',
          D5: 'alu.SUM5',
          D6: 'alu.SUM6',
          D7: 'alu.SUM7'
        }
      },
      {
        id: 'SUM0',
        type: 'Output',
        inputs: { IN: 'alu.SUM0' },
        outputs: { OUT: false }
      },
      {
        id: 'SUM1',
        type: 'Output',
        inputs: { IN: 'alu.SUM1' },
        outputs: { OUT: false }
      },
      {
        id: 'SUM2',
        type: 'Output',
        inputs: { IN: 'alu.SUM2' },
        outputs: { OUT: false }
      },
      {
        id: 'SUM3',
        type: 'Output',
        inputs: { IN: 'alu.SUM3' },
        outputs: { OUT: false }
      },
      {
        id: 'SUM4',
        type: 'Output',
        inputs: { IN: 'alu.SUM4' },
        outputs: { OUT: false }
      },
      {
        id: 'SUM5',
        type: 'Output',
        inputs: { IN: 'alu.SUM5' },
        outputs: { OUT: false }
      },
      {
        id: 'SUM6',
        type: 'Output',
        inputs: { IN: 'alu.SUM6' },
        outputs: { OUT: false }
      },
      {
        id: 'SUM7',
        type: 'Output',
        inputs: { IN: 'alu.SUM7' },
        outputs: { OUT: false }
      },
      {
        id: 'OUT0',
        type: 'Output',
        inputs: { IN: 'tri.OUT0' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT1',
        type: 'Output',
        inputs: { IN: 'tri.OUT1' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT2',
        type: 'Output',
        inputs: { IN: 'tri.OUT2' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT3',
        type: 'Output',
        inputs: { IN: 'tri.OUT3' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT4',
        type: 'Output',
        inputs: { IN: 'tri.OUT4' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT5',
        type: 'Output',
        inputs: { IN: 'tri.OUT5' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT6',
        type: 'Output',
        inputs: { IN: 'tri.OUT6' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT7',
        type: 'Output',
        inputs: { IN: 'tri.OUT7' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'ISCARRY',
        type: 'Output',
        inputs: { IN: 'alu.CO' },
        outputs: { OUT: false }
      },
      {
        id: 'ISZERO',
        type: 'Output',
        inputs: { IN: 'isZero.OUT' },
        outputs: { OUT: false }
      }
    ]
  },
  {
    id: 'FLAGSREGISTER',
    parts: [
      {
        id: 'ISCARRY',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'ISZERO',
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
        id: 'FI',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'register',
        type: 'REGISTER2',
        inputs: { D0: 'ISCARRY.OUT', D1: 'ISZERO.OUT', CLK: 'CLK.OUT', CLR: 'CLR.OUT', LOAD: 'FI.OUT' }
      },
      {
        id: 'CF',
        type: 'Output',
        inputs: { IN: 'register.OUT0' },
        outputs: { OUT: false }
      },
      {
        id: 'ZF',
        type: 'Output',
        inputs: { IN: 'register.OUT1' },
        outputs: { OUT: false }
      },
    ]
  },
  {
    id: 'INSTRUCTIONREGISTER',
    parts: [
      {
        id: 'CLR',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'CLK',
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
        id: 'IO',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'II',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'register',
        type: 'REGISTER8',
        inputs: {
          D0: 'D0.OUT',
          D1: 'D1.OUT',
          D2: 'D2.OUT',
          D3: 'D3.OUT',
          D4: 'D4.OUT',
          D5: 'D5.OUT',
          D6: 'D6.OUT',
          D7: 'D7.OUT',
          LOAD: 'II.OUT',
          CLK: 'CLK.OUT',
          CLR: 'CLR.OUT'
        }
      },
      {
        id: 'tri',
        type: 'TriState4',
        inputs: {
          SEL: 'IO.OUT',
          IN0: 'register.OUT0',
          IN1: 'register.OUT1',
          IN2: 'register.OUT2',
          IN3: 'register.OUT3'
        }
      },
      {
        id: 'REGI0',
        type: 'Output',
        inputs: { IN: 'register.OUT0' },
        outputs: { OUT: false }
      },
      {
        id: 'REGI1',
        type: 'Output',
        inputs: { IN: 'register.OUT1' },
        outputs: { OUT: false }
      },
      {
        id: 'REGI2',
        type: 'Output',
        inputs: { IN: 'register.OUT2' },
        outputs: { OUT: false }
      },
      {
        id: 'REGI3',
        type: 'Output',
        inputs: { IN: 'register.OUT3' },
        outputs: { OUT: false }
      },
      {
        id: 'REGI4',
        type: 'Output',
        inputs: { IN: 'register.OUT4' },
        outputs: { OUT: false }
      },
      {
        id: 'REGI5',
        type: 'Output',
        inputs: { IN: 'register.OUT5' },
        outputs: { OUT: false }
      },
      {
        id: 'REGI6',
        type: 'Output',
        inputs: { IN: 'register.OUT6' },
        outputs: { OUT: false }
      },
      {
        id: 'REGI7',
        type: 'Output',
        inputs: { IN: 'register.OUT7' },
        outputs: { OUT: false }
      },
      {
        id: 'OUT0',
        type: 'Output',
        inputs: { IN: 'tri.OUT0' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT1',
        type: 'Output',
        inputs: { IN: 'tri.OUT1' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT2',
        type: 'Output',
        inputs: { IN: 'tri.OUT2' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'OUT3',
        type: 'Output',
        inputs: { IN: 'tri.OUT3' },
        outputs: { OUT: 'X' }
      }
    ]
  },
  {
    id: 'OUTPUTREGISTER',
    parts: [
      {
        id: 'CLR',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'CLK',
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
        id: 'OI',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'register',
        type: 'REGISTER8',
        inputs: {
          D0: 'D0.OUT',
          D1: 'D1.OUT',
          D2: 'D2.OUT',
          D3: 'D3.OUT',
          D4: 'D4.OUT',
          D5: 'D5.OUT',
          D6: 'D6.OUT',
          D7: 'D7.OUT',
          LOAD: 'OI.OUT',
          CLK: 'CLK.OUT',
          CLR: 'CLR.OUT'
        }
      },
      {
        id: 'REGO0',
        type: 'Output',
        inputs: { IN: 'register.OUT0' },
        outputs: { OUT: false }
      },
      {
        id: 'REGO1',
        type: 'Output',
        inputs: { IN: 'register.OUT1' },
        outputs: { OUT: false }
      },
      {
        id: 'REGO2',
        type: 'Output',
        inputs: { IN: 'register.OUT2' },
        outputs: { OUT: false }
      },
      {
        id: 'REGO3',
        type: 'Output',
        inputs: { IN: 'register.OUT3' },
        outputs: { OUT: false }
      },
      {
        id: 'REGO4',
        type: 'Output',
        inputs: { IN: 'register.OUT4' },
        outputs: { OUT: false }
      },
      {
        id: 'REGO5',
        type: 'Output',
        inputs: { IN: 'register.OUT5' },
        outputs: { OUT: false }
      },
      {
        id: 'REGO6',
        type: 'Output',
        inputs: { IN: 'register.OUT6' },
        outputs: { OUT: false }
      },
      {
        id: 'REGO7',
        type: 'Output',
        inputs: { IN: 'register.OUT7' },
        outputs: { OUT: false }
      }
    ]
  },
  {
    id: 'MAR',
    parts: [
      {
        id: 'DIPD0',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'DIPD1',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'DIPD2',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'DIPD3',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'MI',
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
        id: 'MODE',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'register',
        type: 'REGISTER4',
        inputs: {
          D0: 'D0.OUT',
          D1: 'D1.OUT',
          D2: 'D2.OUT',
          D3: 'D3.OUT',
          LOAD: 'MI.OUT',
          CLK: 'CLK.OUT',
          CLR: 'CLR.OUT'
        }
      },
      {
        id: 'mux',
        type: 'MUX4',
        inputs: {
          A0: 'DIPD0.OUT',
          A1: 'DIPD1.OUT',
          A2: 'DIPD2.OUT',
          A3: 'DIPD3.OUT',
          B0: 'register.OUT0',
          B1: 'register.OUT1',
          B2: 'register.OUT2',
          B3: 'register.OUT3',
          SEL: 'MODE.OUT'
        }
      },
      {
        id: 'REG0',
        type: 'Output',
        inputs: { IN: 'mux.Y0' },
        outputs: { OUT: false }
      },
      {
        id: 'REG1',
        type: 'Output',
        inputs: { IN: 'mux.Y1' },
        outputs: { OUT: false }
      },
      {
        id: 'REG2',
        type: 'Output',
        inputs: { IN: 'mux.Y2' },
        outputs: { OUT: false }
      },
      {
        id: 'REG3',
        type: 'Output',
        inputs: { IN: 'mux.Y3' },
        outputs: { OUT: false }
      }
    ]
  },
  {
    id: 'EDGEDETECTOR',
    parts: [
      {
        id: 'IN',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'and',
        type: 'AND',
        inputs: { A: 'not.OUT', B: 'IN.OUT' }
      },
      {
        id: 'OUT',
        type: 'Output',
        inputs: { IN: 'and.OUT' },
        outputs: { OUT: false }
      },
      {
        id: 'not',
        type: 'NOT',
        inputs: { IN: 'IN.OUT' }
      },
    ]
  },
  {
    id: 'MEMORYCONTENTS',
    parts: [
      {
        id: 'MODE',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'WRITE',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'RI',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'RO',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'CLK',
        type: 'Input',
        outputs: { OUT: false }
      },
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
        id: 'DIPD0',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'DIPD1',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'DIPD2',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'DIPD3',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'DIPD4',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'DIPD5',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'DIPD6',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'DIPD7',
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
        id: 'mux0',
        type: 'MUX8',
        inputs: {
          A0: 'DIPD0.OUT', A1: 'DIPD1.OUT', A2: 'DIPD2.OUT', A3: 'DIPD3.OUT', A4: 'DIPD4.OUT', A5: 'DIPD5.OUT', A6: 'DIPD6.OUT', A7: 'DIPD7.OUT',
          B0: 'D0.OUT', B1: 'D1.OUT', B2: 'D2.OUT', B3: 'D3.OUT', B4: 'D4.OUT', B5: 'D5.OUT', B6: 'D6.OUT', B7: 'D7.OUT',
          SEL: 'MODE.OUT'
        }
      },
      {
        id: 'and',
        type: 'AND',
        inputs: { A: 'RI.OUT', B: 'CLK.OUT' }
      },
      {
        id: 'mux1',
        type: 'MUX',
        inputs: { A: 'WRITE.OUT', B: 'and.OUT', SEL: 'MODE.OUT' }
      },
      {
        id: 'ram',
        type: 'RAM',
        inputs: {
          A0: 'A0.OUT', A1: 'A1.OUT', A2: 'A2.OUT', A3: 'A3.OUT',
          D0: 'mux0.Y0', D1: 'mux0.Y1', D2: 'mux0.Y2', D3: 'mux0.Y3', D4: 'mux0.Y4', D5: 'mux0.Y5', D6: 'mux0.Y6', D7: 'mux0.Y7',
          E: 'CONST_1', W: 'mux1.Y'
        }
      },
      {
        id: 'RAM0',
        type: 'Output',
        inputs: { IN: 'ram.O0' },
        outputs: { OUT: false }
      },
      {
        id: 'RAM1',
        type: 'Output',
        inputs: { IN: 'ram.O1' },
        outputs: { OUT: false }
      },
      {
        id: 'RAM2',
        type: 'Output',
        inputs: { IN: 'ram.O2' },
        outputs: { OUT: false }
      },
      {
        id: 'RAM3',
        type: 'Output',
        inputs: { IN: 'ram.O3' },
        outputs: { OUT: false }
      },
      {
        id: 'RAM4',
        type: 'Output',
        inputs: { IN: 'ram.O4' },
        outputs: { OUT: false }
      },
      {
        id: 'RAM5',
        type: 'Output',
        inputs: { IN: 'ram.O5' },
        outputs: { OUT: false }
      },
      {
        id: 'RAM6',
        type: 'Output',
        inputs: { IN: 'ram.O6' },
        outputs: { OUT: false }
      },
      {
        id: 'RAM7',
        type: 'Output',
        inputs: { IN: 'ram.O7' },
        outputs: { OUT: false }
      },
      {
        id: 'tri8',
        type: 'TriState8',
        inputs: { IN0: 'RAM0.OUT', IN1: 'RAM1.OUT', IN2: 'RAM2.OUT', IN3: 'RAM3.OUT', IN4: 'RAM4.OUT', IN5: 'RAM5.OUT', IN6: 'RAM6.OUT', IN7: 'RAM7.OUT', SEL: 'RO.OUT' }
      },
      {
        id: 'OUT0',
        type: 'Output',
        inputs: { IN: 'tri8.OUT0' },
        outputs: { OUT: false }
      },
      {
        id: 'OUT1',
        type: 'Output',
        inputs: { IN: 'tri8.OUT1' },
        outputs: { OUT: false }
      },
      {
        id: 'OUT2',
        type: 'Output',
        inputs: { IN: 'tri8.OUT2' },
        outputs: { OUT: false }
      },
      {
        id: 'OUT3',
        type: 'Output',
        inputs: { IN: 'tri8.OUT3' },
        outputs: { OUT: false }
      },
      {
        id: 'OUT4',
        type: 'Output',
        inputs: { IN: 'tri8.OUT4' },
        outputs: { OUT: false }
      },
      {
        id: 'OUT5',
        type: 'Output',
        inputs: { IN: 'tri8.OUT5' },
        outputs: { OUT: false }
      },
      {
        id: 'OUT6',
        type: 'Output',
        inputs: { IN: 'tri8.OUT6' },
        outputs: { OUT: false }
      },
      {
        id: 'OUT7',
        type: 'Output',
        inputs: { IN: 'tri8.OUT7' },
        outputs: { OUT: false }
      },
    ]
  },
  {
    id: 'OPCODECOUNTER',
    parts: [
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
        id: 'nor',
        type: 'NOR',
        inputs: { A: 'CLR.OUT', B: 'decoder.Y5' }
      },
      {
        id: 'dff0',
        type: 'DFF',
        inputs: {
          "~SET": 'CONST_1', "~CLR": 'nor.OUT', D: 'dff0.~Q', CLK: 'CLK.OUT'
        }
      },
      {
        id: 'dff1',
        type: 'DFF',
        inputs: {
          "~SET": 'CONST_1', "~CLR": 'nor.OUT', D: 'dff1.~Q', CLK: 'dff0.~Q'
        }
      },
      {
        id: 'dff2',
        type: 'DFF',
        inputs: {
          "~SET": 'CONST_1', "~CLR": 'nor.OUT', D: 'dff2.~Q', CLK: 'dff1.~Q'
        }
      },
      {
        id: 'decoder',
        type: 'DECODER3TO8',
        inputs: {
          A0: 'dff0.Q',
          A1: 'dff1.Q',
          A2: 'dff2.Q'
        }
      },
      {
        id: 'Q0',
        type: 'Output',
        inputs: { IN: 'dff0.Q' },
        outputs: { OUT: false }
      },
      {
        id: 'Q1',
        type: 'Output',
        inputs: { IN: 'dff1.Q' },
        outputs: { OUT: false }
      },
      {
        id: 'Q2',
        type: 'Output',
        inputs: { IN: 'dff2.Q' },
        outputs: { OUT: false }
      },
      {
        id: 'T0',
        type: 'Output',
        inputs: { IN: 'decoder.Y0' },
        outputs: { OUT: false }
      },
      {
        id: 'T1',
        type: 'Output',
        inputs: { IN: 'decoder.Y1' },
        outputs: { OUT: false }
      },
      {
        id: 'T2',
        type: 'Output',
        inputs: { IN: 'decoder.Y2' },
        outputs: { OUT: false }
      },
      {
        id: 'T3',
        type: 'Output',
        inputs: { IN: 'decoder.Y3' },
        outputs: { OUT: false }
      },
      {
        id: 'T4',
        type: 'Output',
        inputs: { IN: 'decoder.Y4' },
        outputs: { OUT: false }
      }
    ]
  },
  {
    id: 'INSTRUCTIONDECODER',
    parts: [
      {
        id: 'I0',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'I1',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'I2',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'I3',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'CF',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'ZF',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'T0',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'T1',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'T2',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'T3',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'T4',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'decoder',
        type: 'DECODER4TO16',
        inputs: { A0: 'I0.OUT', A1: 'I1.OUT', A2: 'I2.OUT', A3: 'I3.OUT' }
      },
      {
        id: 'hltand',
        type: 'AND',
        inputs: { A: 'T2.OUT', B: 'decoder.Y15' }
      },
      {
        id: 'HLT',
        type: 'Output',
        inputs: { IN: 'hltand.OUT' },
        outputs: { OUT: false }
      },
      {
        id: 'miand0',
        type: 'AND',
        inputs: { A: 'T2.OUT', B: 'decoder.Y1' }
      },
      {
        id: 'miand1',
        type: 'AND',
        inputs: { A: 'T2.OUT', B: 'decoder.Y2' }
      },
      {
        id: 'miand2',
        type: 'AND',
        inputs: { A: 'T2.OUT', B: 'decoder.Y3' }
      },
      {
        id: 'miand3',
        type: 'AND',
        inputs: { A: 'T2.OUT', B: 'decoder.Y4' }
      },
      {
        id: 'mior',
        type: 'OR5',
        inputs: { A: 'miand0.OUT', B: 'miand1.OUT', C: 'miand2.OUT', D: 'miand3.OUT', E: 'T0.OUT' }
      },
      {
        id: 'MI',
        type: 'Output',
        inputs: { IN: 'mior.OUT' },
        outputs: { OUT: false }
      },
      {
        id: 'riand',
        type: 'AND',
        inputs: { A: 'T3.OUT', B: 'decoder.Y4' }
      },
      {
        id: 'RI',
        type: 'Output',
        inputs: { IN: 'riand.OUT' },
        outputs: { OUT: false }
      },
      {
        id: 'roand0',
        type: 'AND',
        inputs: { A: 'T3.OUT', B: 'decoder.Y1' }
      },
      {
        id: 'roand1',
        type: 'AND',
        inputs: { A: 'T3.OUT', B: 'decoder.Y2' }
      },
      {
        id: 'roand2',
        type: 'AND',
        inputs: { A: 'T3.OUT', B: 'decoder.Y3' }
      },
      {
        id: 'roor',
        type: 'OR4',
        inputs: { A: 'roand0.OUT', B: 'roand1.OUT', C: 'roand2.OUT', D: 'T1.OUT' }
      },
      {
        id: 'RO',
        type: 'Output',
        inputs: { IN: 'roor.OUT' },
        outputs: { OUT: false }
      },
      {
        id: 'ioand0',
        type: 'AND',
        inputs: { A: 'T2.OUT', B: 'decoder.Y1' }
      },
      {
        id: 'ioand1',
        type: 'AND',
        inputs: { A: 'T2.OUT', B: 'decoder.Y2' }
      },
      {
        id: 'ioand2',
        type: 'AND',
        inputs: { A: 'T2.OUT', B: 'decoder.Y3' }
      },
      {
        id: 'ioand3',
        type: 'AND',
        inputs: { A: 'T2.OUT', B: 'decoder.Y4' }
      },
      {
        id: 'ioand4',
        type: 'AND',
        inputs: { A: 'T2.OUT', B: 'decoder.Y5' }
      },
      {
        id: 'ioand5',
        type: 'AND',
        inputs: { A: 'T2.OUT', B: 'decoder.Y6' }
      },
      {
        id: 'ioand6',
        type: 'AND3',
        inputs: { A: 'T2.OUT', B: 'decoder.Y7', C: 'CF.OUT' }
      },
      {
        id: 'ioand7',
        type: 'AND3',
        inputs: { A: 'T2.OUT', B: 'decoder.Y8', C: 'ZF.OUT' }
      },
      {
        id: 'ioor0',
        type: 'OR4',
        inputs: {
          A: 'ioand0.OUT', B: 'ioand1.OUT', C: 'ioand2.OUT', D: 'ioand3.OUT'
        }
      },
      {
        id: 'ioor1',
        type: 'OR4',
        inputs: {
          A: 'ioand4.OUT', B: 'ioand5.OUT', C: 'ioand6.OUT', D: 'ioand7.OUT'
        }
      },
      {
        id: 'ioor2',
        type: 'OR',
        inputs: {
          A: 'ioor0.OUT', B: 'ioor1.OUT'
        }
      },
      {
        id: 'IO',
        type: 'Output',
        inputs: { IN: 'ioor2.OUT' },
        outputs: { OUT: false }
      },
      {
        id: 'II',
        type: 'Output',
        inputs: { IN: 'T1.OUT' },
        outputs: { OUT: false }
      },
      {
        id: 'CE',
        type: 'Output',
        inputs: { IN: 'T1.OUT' },
        outputs: { OUT: false }
      },
      {
        id: 'CO',
        type: 'Output',
        inputs: { IN: 'T0.OUT' },
        outputs: { OUT: false }
      },
      {
        id: 'aiand0',
        type: 'AND',
        inputs: { A: 'T3.OUT', B: 'decoder.Y1' }
      },
      {
        id: 'aiand1',
        type: 'AND',
        inputs: { A: 'T4.OUT', B: 'decoder.Y2' }
      },
      {
        id: 'aiand2',
        type: 'AND',
        inputs: { A: 'T4.OUT', B: 'decoder.Y3' }
      },
      {
        id: 'aiand3',
        type: 'AND',
        inputs: { A: 'T2.OUT', B: 'decoder.Y5' }
      },
      {
        id: 'aior',
        type: 'OR4',
        inputs: { A: 'aiand0.OUT', B: 'aiand1.OUT', C: 'aiand2.OUT', D: 'aiand3.OUT' }
      },
      {
        id: 'AI',
        type: 'Output',
        inputs: { IN: 'aior.OUT' },
        outputs: { OUT: false }
      },
      {
        id: 'aoand0',
        type: 'AND',
        inputs: { A: 'T3.OUT', B: 'decoder.Y4' }
      },
      {
        id: 'aoand1',
        type: 'AND',
        inputs: { A: 'T2.OUT', B: 'decoder.Y14' }
      },
      {
        id: 'aoor',
        type: 'OR',
        inputs: { A: 'aoand0.OUT', B: 'aoand1.OUT' }
      },
      {
        id: 'AO',
        type: 'Output',
        inputs: { IN: 'aoor.OUT' },
        outputs: { OUT: false }
      },
      {
        id: 'eoand0',
        type: 'AND',
        inputs: { A: 'T4.OUT', B: 'decoder.Y2' }
      },
      {
        id: 'eoand1',
        type: 'AND',
        inputs: { A: 'T4.OUT', B: 'decoder.Y3' }
      },
      {
        id: 'eoor',
        type: 'OR',
        inputs: { A: 'eoand0.OUT', B: 'eoand1.OUT' }
      },
      {
        id: 'EO',
        type: 'Output',
        inputs: { IN: 'eoor.OUT' },
        outputs: { OUT: false }
      },
      {
        id: 'fiand0',
        type: 'AND',
        inputs: { A: 'T4.OUT', B: 'decoder.Y2' }
      },
      {
        id: 'fiand1',
        type: 'AND',
        inputs: { A: 'T4.OUT', B: 'decoder.Y3' }
      },
      {
        id: 'fior',
        type: 'OR',
        inputs: { A: 'fiand0.OUT', B: 'fiand1.OUT' }
      },
      {
        id: 'FI',
        type: 'Output',
        inputs: { IN: 'fior.OUT' },
        outputs: { OUT: false }
      },
      {
        id: 'suand',
        type: 'AND',
        inputs: { A: 'T4.OUT', B: 'decoder.Y3' }
      },
      {
        id: 'SU',
        type: 'Output',
        inputs: { IN: 'suand.OUT' },
        outputs: { OUT: false }
      },
      {
        id: 'biand0',
        type: 'AND',
        inputs: { A: 'T3.OUT', B: 'decoder.Y2' }
      },
      {
        id: 'biand1',
        type: 'AND',
        inputs: { A: 'T3.OUT', B: 'decoder.Y3' }
      },
      {
        id: 'bior',
        type: 'OR',
        inputs: { A: 'biand0.OUT', B: 'biand1.OUT' }
      },
      {
        id: 'BI',
        type: 'Output',
        inputs: { IN: 'bior.OUT' },
        outputs: { OUT: false }
      },
      {
        id: 'oiand',
        type: 'AND',
        inputs: { A: 'T2.OUT', B: 'decoder.Y14' }
      },
      {
        id: 'OI',
        type: 'Output',
        inputs: { IN: 'oiand.OUT' },
        outputs: { OUT: false }
      },
      {
        id: 'jand0',
        type: 'AND',
        inputs: { A: 'T2.OUT', B: 'decoder.Y6' }
      },
      {
        id: 'jand1',
        type: 'AND3',
        inputs: { A: 'T2.OUT', B: 'decoder.Y7', C: 'CF.OUT' }
      },
      {
        id: 'jand2',
        type: 'AND3',
        inputs: { A: 'T2.OUT', B: 'decoder.Y8', C: 'ZF.OUT' }
      },
      {
        id: 'jor',
        type: 'OR3',
        inputs: { A: 'jand0.OUT', B: 'jand1.OUT', C: 'jand2.OUT' }
      },
      {
        id: 'J',
        type: 'Output',
        inputs: { IN: 'jor.OUT' },
        outputs: { OUT: false }
      }
    ]
  },
  {
    id: 'CLOCK',
    parts: [
      {
        id: 'OSC',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'HLT',
        type: 'Input',
        outputs: { OUT: false }
      },
      {
        id: 'not0',
        type: 'NOT',
        inputs: { IN: 'HLT.OUT' }
      },
      {
        id: 'and',
        type: 'AND',
        inputs: { A: 'OSC.OUT', B: 'not0.OUT' }
      },
      {
        id: 'not1',
        type: 'NOT',
        inputs: { IN: 'and.OUT' }
      },
      {
        id: 'CLK',
        type: 'Output',
        inputs: { IN: 'and.OUT' },
        outputs: { OUT: false }
      },
      {
        id: '~CLK',
        type: 'Output',
        inputs: { IN: 'not1.OUT' },
        outputs: { OUT: false }
      }
    ]
  }
];
