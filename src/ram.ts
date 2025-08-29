import { Circuit } from './types';

export const ram: Circuit[] = [
  {
    id: 'RAM',
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
        id: 'decoder',
        type: 'DECODER4TO16',
        inputs: { A0: 'A0.OUT', A1: 'A1.OUT', A2: 'A2.OUT', A3: 'A3.OUT' }
      },
      {
        id: 'memory0',
        type: 'MEMORY8',
        inputs: {
          SEL: 'decoder.Y0', E: 'E.OUT', W: 'W.OUT',
          D0: 'D0.OUT', D1: 'D1.OUT', D2: 'D2.OUT', D3: 'D3.OUT',
          D4: 'D4.OUT', D5: 'D5.OUT', D6: 'D6.OUT', D7: 'D7.OUT'
        }
      },
      {
        id: 'memory1',
        type: 'MEMORY8',
        inputs: {
          SEL: 'decoder.Y1', E: 'E.OUT', W: 'W.OUT',
          D0: 'D0.OUT', D1: 'D1.OUT', D2: 'D2.OUT', D3: 'D3.OUT',
          D4: 'D4.OUT', D5: 'D5.OUT', D6: 'D6.OUT', D7: 'D7.OUT'
        }
      },
      {
        id: 'memory2',
        type: 'MEMORY8',
        inputs: {
          SEL: 'decoder.Y2', E: 'E.OUT', W: 'W.OUT',
          D0: 'D0.OUT', D1: 'D1.OUT', D2: 'D2.OUT', D3: 'D3.OUT',
          D4: 'D4.OUT', D5: 'D5.OUT', D6: 'D6.OUT', D7: 'D7.OUT'
        }
      },
      {
        id: 'memory3',
        type: 'MEMORY8',
        inputs: {
          SEL: 'decoder.Y3', E: 'E.OUT', W: 'W.OUT',
          D0: 'D0.OUT', D1: 'D1.OUT', D2: 'D2.OUT', D3: 'D3.OUT',
          D4: 'D4.OUT', D5: 'D5.OUT', D6: 'D6.OUT', D7: 'D7.OUT'
        }
      },
      {
        id: 'memory4',
        type: 'MEMORY8',
        inputs: {
          SEL: 'decoder.Y4', E: 'E.OUT', W: 'W.OUT',
          D0: 'D0.OUT', D1: 'D1.OUT', D2: 'D2.OUT', D3: 'D3.OUT',
          D4: 'D4.OUT', D5: 'D5.OUT', D6: 'D6.OUT', D7: 'D7.OUT'
        }
      },
      {
        id: 'memory5',
        type: 'MEMORY8',
        inputs: {
          SEL: 'decoder.Y5', E: 'E.OUT', W: 'W.OUT',
          D0: 'D0.OUT', D1: 'D1.OUT', D2: 'D2.OUT', D3: 'D3.OUT',
          D4: 'D4.OUT', D5: 'D5.OUT', D6: 'D6.OUT', D7: 'D7.OUT'
        }
      },
      {
        id: 'memory6',
        type: 'MEMORY8',
        inputs: {
          SEL: 'decoder.Y6', E: 'E.OUT', W: 'W.OUT',
          D0: 'D0.OUT', D1: 'D1.OUT', D2: 'D2.OUT', D3: 'D3.OUT',
          D4: 'D4.OUT', D5: 'D5.OUT', D6: 'D6.OUT', D7: 'D7.OUT'
        }
      },
      {
        id: 'memory7',
        type: 'MEMORY8',
        inputs: {
          SEL: 'decoder.Y7', E: 'E.OUT', W: 'W.OUT',
          D0: 'D0.OUT', D1: 'D1.OUT', D2: 'D2.OUT', D3: 'D3.OUT',
          D4: 'D4.OUT', D5: 'D5.OUT', D6: 'D6.OUT', D7: 'D7.OUT'
        }
      },
      {
        id: 'memory8',
        type: 'MEMORY8',
        inputs: {
          SEL: 'decoder.Y8', E: 'E.OUT', W: 'W.OUT',
          D0: 'D0.OUT', D1: 'D1.OUT', D2: 'D2.OUT', D3: 'D3.OUT',
          D4: 'D4.OUT', D5: 'D5.OUT', D6: 'D6.OUT', D7: 'D7.OUT'
        }
      },
      {
        id: 'memory9',
        type: 'MEMORY8',
        inputs: {
          SEL: 'decoder.Y9', E: 'E.OUT', W: 'W.OUT',
          D0: 'D0.OUT', D1: 'D1.OUT', D2: 'D2.OUT', D3: 'D3.OUT',
          D4: 'D4.OUT', D5: 'D5.OUT', D6: 'D6.OUT', D7: 'D7.OUT'
        }
      },
      {
        id: 'memory10',
        type: 'MEMORY8',
        inputs: {
          SEL: 'decoder.Y10', E: 'E.OUT', W: 'W.OUT',
          D0: 'D0.OUT', D1: 'D1.OUT', D2: 'D2.OUT', D3: 'D3.OUT',
          D4: 'D4.OUT', D5: 'D5.OUT', D6: 'D6.OUT', D7: 'D7.OUT'
        }
      },
      {
        id: 'memory11',
        type: 'MEMORY8',
        inputs: {
          SEL: 'decoder.Y11', E: 'E.OUT', W: 'W.OUT',
          D0: 'D0.OUT', D1: 'D1.OUT', D2: 'D2.OUT', D3: 'D3.OUT',
          D4: 'D4.OUT', D5: 'D5.OUT', D6: 'D6.OUT', D7: 'D7.OUT'
        }
      },
      {
        id: 'memory12',
        type: 'MEMORY8',
        inputs: {
          SEL: 'decoder.Y12', E: 'E.OUT', W: 'W.OUT',
          D0: 'D0.OUT', D1: 'D1.OUT', D2: 'D2.OUT', D3: 'D3.OUT',
          D4: 'D4.OUT', D5: 'D5.OUT', D6: 'D6.OUT', D7: 'D7.OUT'
        }
      },
      {
        id: 'memory13',
        type: 'MEMORY8',
        inputs: {
          SEL: 'decoder.Y13', E: 'E.OUT', W: 'W.OUT',
          D0: 'D0.OUT', D1: 'D1.OUT', D2: 'D2.OUT', D3: 'D3.OUT',
          D4: 'D4.OUT', D5: 'D5.OUT', D6: 'D6.OUT', D7: 'D7.OUT'
        }
      },
      {
        id: 'memory14',
        type: 'MEMORY8',
        inputs: {
          SEL: 'decoder.Y14', E: 'E.OUT', W: 'W.OUT',
          D0: 'D0.OUT', D1: 'D1.OUT', D2: 'D2.OUT', D3: 'D3.OUT',
          D4: 'D4.OUT', D5: 'D5.OUT', D6: 'D6.OUT', D7: 'D7.OUT'
        }
      },
      {
        id: 'memory15',
        type: 'MEMORY8',
        inputs: {
          SEL: 'decoder.Y15', E: 'E.OUT', W: 'W.OUT',
          D0: 'D0.OUT', D1: 'D1.OUT', D2: 'D2.OUT', D3: 'D3.OUT',
          D4: 'D4.OUT', D5: 'D5.OUT', D6: 'D6.OUT', D7: 'D7.OUT'
        }
      },
      {
        id: 'bus0',
        type: 'Bus',
        inputs: {
          IN0: 'memory0.O0',
          IN1: 'memory1.O0',
          IN2: 'memory2.O0',
          IN3: 'memory3.O0',
          IN4: 'memory4.O0',
          IN5: 'memory5.O0',
          IN6: 'memory6.O0',
          IN7: 'memory7.O0',
          IN8: 'memory8.O0',
          IN9: 'memory9.O0',
          IN10: 'memory10.O0',
          IN11: 'memory11.O0',
          IN12: 'memory12.O0',
          IN13: 'memory13.O0',
          IN14: 'memory14.O0',
          IN15: 'memory15.O0',
        },
        outputs: { OUT: 'X' }
      },
      {
        id: 'bus1',
        type: 'Bus',
        inputs: {
          IN0: 'memory0.O1',
          IN1: 'memory1.O1',
          IN2: 'memory2.O1',
          IN3: 'memory3.O1',
          IN4: 'memory4.O1',
          IN5: 'memory5.O1',
          IN6: 'memory6.O1',
          IN7: 'memory7.O1',
          IN8: 'memory8.O1',
          IN9: 'memory9.O1',
          IN10: 'memory10.O1',
          IN11: 'memory11.O1',
          IN12: 'memory12.O1',
          IN13: 'memory13.O1',
          IN14: 'memory14.O1',
          IN15: 'memory15.O1',
        },
        outputs: { OUT: 'X' }
      },
      {
        id: 'bus2',
        type: 'Bus',
        inputs: {
          IN0: 'memory0.O2',
          IN1: 'memory1.O2',
          IN2: 'memory2.O2',
          IN3: 'memory3.O2',
          IN4: 'memory4.O2',
          IN5: 'memory5.O2',
          IN6: 'memory6.O2',
          IN7: 'memory7.O2',
          IN8: 'memory8.O2',
          IN9: 'memory9.O2',
          IN10: 'memory10.O2',
          IN11: 'memory11.O2',
          IN12: 'memory12.O2',
          IN13: 'memory13.O2',
          IN14: 'memory14.O2',
          IN15: 'memory15.O2',
        },
        outputs: { OUT: 'X' }
      },
      {
        id: 'bus3',
        type: 'Bus',
        inputs: {
          IN0: 'memory0.O3',
          IN1: 'memory1.O3',
          IN2: 'memory2.O3',
          IN3: 'memory3.O3',
          IN4: 'memory4.O3',
          IN5: 'memory5.O3',
          IN6: 'memory6.O3',
          IN7: 'memory7.O3',
          IN8: 'memory8.O3',
          IN9: 'memory9.O3',
          IN10: 'memory10.O3',
          IN11: 'memory11.O3',
          IN12: 'memory12.O3',
          IN13: 'memory13.O3',
          IN14: 'memory14.O3',
          IN15: 'memory15.O3',
        },
        outputs: { OUT: 'X' }
      },
      {
        id: 'bus4',
        type: 'Bus',
        inputs: {
          IN0: 'memory0.O4',
          IN1: 'memory1.O4',
          IN2: 'memory2.O4',
          IN3: 'memory3.O4',
          IN4: 'memory4.O4',
          IN5: 'memory5.O4',
          IN6: 'memory6.O4',
          IN7: 'memory7.O4',
          IN8: 'memory8.O4',
          IN9: 'memory9.O4',
          IN10: 'memory10.O4',
          IN11: 'memory11.O4',
          IN12: 'memory12.O4',
          IN13: 'memory13.O4',
          IN14: 'memory14.O4',
          IN15: 'memory15.O4',
        },
        outputs: { OUT: 'X' }
      },
      {
        id: 'bus5',
        type: 'Bus',
        inputs: {
          IN0: 'memory0.O5',
          IN1: 'memory1.O5',
          IN2: 'memory2.O5',
          IN3: 'memory3.O5',
          IN4: 'memory4.O5',
          IN5: 'memory5.O5',
          IN6: 'memory6.O5',
          IN7: 'memory7.O5',
          IN8: 'memory8.O5',
          IN9: 'memory9.O5',
          IN10: 'memory10.O5',
          IN11: 'memory11.O5',
          IN12: 'memory12.O5',
          IN13: 'memory13.O5',
          IN14: 'memory14.O5',
          IN15: 'memory15.O5',
        },
        outputs: { OUT: 'X' }
      },
      {
        id: 'bus6',
        type: 'Bus',
        inputs: {
          IN0: 'memory0.O6',
          IN1: 'memory1.O6',
          IN2: 'memory2.O6',
          IN3: 'memory3.O6',
          IN4: 'memory4.O6',
          IN5: 'memory5.O6',
          IN6: 'memory6.O6',
          IN7: 'memory7.O6',
          IN8: 'memory8.O6',
          IN9: 'memory9.O6',
          IN10: 'memory10.O6',
          IN11: 'memory11.O6',
          IN12: 'memory12.O6',
          IN13: 'memory13.O6',
          IN14: 'memory14.O6',
          IN15: 'memory15.O6',
        },
        outputs: { OUT: 'X' }
      },
      {
        id: 'bus7',
        type: 'Bus',
        inputs: {
          IN0: 'memory0.O7',
          IN1: 'memory1.O7',
          IN2: 'memory2.O7',
          IN3: 'memory3.O7',
          IN4: 'memory4.O7',
          IN5: 'memory5.O7',
          IN6: 'memory6.O7',
          IN7: 'memory7.O7',
          IN8: 'memory8.O7',
          IN9: 'memory9.O7',
          IN10: 'memory10.O7',
          IN11: 'memory11.O7',
          IN12: 'memory12.O7',
          IN13: 'memory13.O7',
          IN14: 'memory14.O7',
          IN15: 'memory15.O7',
        },
        outputs: { OUT: 'X' }
      },
      {
        id: 'O0',
        type: 'Output',
        inputs: { IN: 'bus0.OUT' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'O1',
        type: 'Output',
        inputs: { IN: 'bus1.OUT' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'O2',
        type: 'Output',
        inputs: { IN: 'bus2.OUT' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'O3',
        type: 'Output',
        inputs: { IN: 'bus3.OUT' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'O4',
        type: 'Output',
        inputs: { IN: 'bus4.OUT' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'O5',
        type: 'Output',
        inputs: { IN: 'bus5.OUT' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'O6',
        type: 'Output',
        inputs: { IN: 'bus6.OUT' },
        outputs: { OUT: 'X' }
      },
      {
        id: 'O7',
        type: 'Output',
        inputs: { IN: 'bus7.OUT' },
        outputs: { OUT: 'X' }
      }
    ]
  }
];
