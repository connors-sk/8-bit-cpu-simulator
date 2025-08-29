import { Element } from './types';

export let cpu: Element[] = [
    {
        id: 'OSC',
        type: 'Input',
        outputs: { OUT: false }
    },
    {
        id: 'CLOCK',
        type: 'CLOCK',
        inputs: { OSC: 'OSC.OUT', HLT: 'INSTRUCTINODECODER.HLT' }
    },
    {
        id: 'CLK',
        type: 'Output',
        inputs: { IN: 'CLOCK.CLK' },
        outputs: { OUT: false }
    },
    {
        id: 'CLR',
        type: 'Input',
        outputs: { OUT: false }
    },
    {
        id: 'BUS0',
        type: 'BusPullDown',
        inputs: {
            IN0: 'PC.OUT0',
            IN1: 'REGA.OUT0',
            IN2: 'REGSUM.OUT0',
            IN3: 'REGB.OUT0',
            IN4: 'MEMORYCONTENTS.OUT0',
            IN5: 'REGI.OUT0'
        },
        outputs: { OUT: 'X' }
    },
    {
        id: 'BUS1',
        type: 'BusPullDown',
        inputs: {
            IN0: 'PC.OUT1',
            IN1: 'REGA.OUT1',
            IN2: 'REGSUM.OUT1',
            IN3: 'REGB.OUT1',
            IN4: 'MEMORYCONTENTS.OUT1',
            IN5: 'REGI.OUT1'
        },
        outputs: { OUT: 'X' }
    },
    {
        id: 'BUS2',
        type: 'BusPullDown',
        inputs: {
            IN0: 'PC.OUT2',
            IN1: 'REGA.OUT2',
            IN2: 'REGSUM.OUT2',
            IN3: 'REGB.OUT2',
            IN4: 'MEMORYCONTENTS.OUT2',
            IN5: 'REGI.OUT2'
        },
        outputs: { OUT: 'X' }
    },
    {
        id: 'BUS3',
        type: 'BusPullDown',
        inputs: {
            IN0: 'PC.OUT3',
            IN1: 'REGA.OUT3',
            IN2: 'REGSUM.OUT3',
            IN3: 'REGB.OUT3',
            IN4: 'MEMORYCONTENTS.OUT3',
            IN5: 'REGI.OUT3'
        },
        outputs: { OUT: 'X' }
    },
    {
        id: 'BUS4',
        type: 'BusPullDown',
        inputs: {
            IN0: 'PC.OUT4',
            IN1: 'REGA.OUT4',
            IN2: 'REGSUM.OUT4',
            IN3: 'REGB.OUT4',
            IN4: 'MEMORYCONTENTS.OUT4'
        },
        outputs: { OUT: 'X' }
    },
    {
        id: 'BUS5',
        type: 'BusPullDown',
        inputs: {
            IN0: 'PC.OUT5',
            IN1: 'REGA.OUT5',
            IN2: 'REGSUM.OUT5',
            IN3: 'REGB.OUT5',
            IN4: 'MEMORYCONTENTS.OUT5'
        },
        outputs: { OUT: 'X' }
    },
    {
        id: 'BUS6',
        type: 'BusPullDown',
        inputs: {
            IN0: 'PC.OUT6',
            IN1: 'REGA.OUT6',
            IN2: 'REGSUM.OUT6',
            IN3: 'REGB.OUT6',
            IN4: 'MEMORYCONTENTS.OUT6'
        },
        outputs: { OUT: 'X' }
    },
    {
        id: 'BUS7',
        type: 'BusPullDown',
        inputs: {
            IN0: 'PC.OUT7',
            IN1: 'REGA.OUT7',
            IN2: 'REGSUM.OUT7',
            IN3: 'REGB.OUT7',
            IN4: 'MEMORYCONTENTS.OUT7'
        },
        outputs: { OUT: 'X' }
    },
    {
        id: 'PC',
        type: 'PC',
        inputs: {
            A: 'BUS0.OUT',
            B: 'BUS1.OUT',
            C: 'BUS2.OUT',
            D: 'BUS3.OUT',
            CLK: 'CLK.OUT',
            CLR: 'CLR.OUT',
            CE: 'CE.OUT',
            J: 'J.OUT',
            CO: 'CO.OUT'
        }
    },
    {
        id: 'PC0',
        type: 'Output',
        inputs: { IN: 'PC.PC0' },
        outputs: { OUT: false }
    },
    {
        id: 'PC1',
        type: 'Output',
        inputs: { IN: 'PC.PC1' },
        outputs: { OUT: false }
    },
    {
        id: 'PC2',
        type: 'Output',
        inputs: { IN: 'PC.PC2' },
        outputs: { OUT: false }
    },
    {
        id: 'PC3',
        type: 'Output',
        inputs: { IN: 'PC.PC3' },
        outputs: { OUT: false }
    },
    {
        id: 'REGA',
        type: 'REGISTERA',
        inputs: {
            D0: 'BUS0.OUT',
            D1: 'BUS1.OUT',
            D2: 'BUS2.OUT',
            D3: 'BUS3.OUT',
            D4: 'BUS4.OUT',
            D5: 'BUS5.OUT',
            D6: 'BUS6.OUT',
            D7: 'BUS7.OUT',
            AI: 'AI.OUT',
            AO: 'AO.OUT',
            CLK: 'CLK.OUT',
            CLR: 'CLR.OUT'
        }
    },
    {
        id: 'REGA0',
        type: 'Output',
        inputs: { IN: 'REGA.REGA0' },
        outputs: { OUT: false }
    },
    {
        id: 'REGA1',
        type: 'Output',
        inputs: { IN: 'REGA.REGA1' },
        outputs: { OUT: false }
    },
    {
        id: 'REGA2',
        type: 'Output',
        inputs: { IN: 'REGA.REGA2' },
        outputs: { OUT: false }
    },
    {
        id: 'REGA3',
        type: 'Output',
        inputs: { IN: 'REGA.REGA3' },
        outputs: { OUT: false }
    },
    {
        id: 'REGA4',
        type: 'Output',
        inputs: { IN: 'REGA.REGA4' },
        outputs: { OUT: false }
    },
    {
        id: 'REGA5',
        type: 'Output',
        inputs: { IN: 'REGA.REGA5' },
        outputs: { OUT: false }
    },
    {
        id: 'REGA6',
        type: 'Output',
        inputs: { IN: 'REGA.REGA6' },
        outputs: { OUT: false }
    },
    {
        id: 'REGA7',
        type: 'Output',
        inputs: { IN: 'REGA.REGA7' },
        outputs: { OUT: false }
    },
    {
        id: 'REGB',
        type: 'REGISTERB',
        inputs: {
            D0: 'BUS0.OUT',
            D1: 'BUS1.OUT',
            D2: 'BUS2.OUT',
            D3: 'BUS3.OUT',
            D4: 'BUS4.OUT',
            D5: 'BUS5.OUT',
            D6: 'BUS6.OUT',
            D7: 'BUS7.OUT',
            BI: 'BI.OUT',
            BO: 'CONST_0',
            CLK: 'CLK.OUT',
            CLR: 'CLR.OUT'
        }
    },
    {
        id: 'REGB0',
        type: 'Output',
        inputs: { IN: 'REGB.REGB0' },
        outputs: { OUT: false }
    },
    {
        id: 'REGB1',
        type: 'Output',
        inputs: { IN: 'REGB.REGB1' },
        outputs: { OUT: false }
    },
    {
        id: 'REGB2',
        type: 'Output',
        inputs: { IN: 'REGB.REGB2' },
        outputs: { OUT: false }
    },
    {
        id: 'REGB3',
        type: 'Output',
        inputs: { IN: 'REGB.REGB3' },
        outputs: { OUT: false }
    },
    {
        id: 'REGB4',
        type: 'Output',
        inputs: { IN: 'REGB.REGB4' },
        outputs: { OUT: false }
    },
    {
        id: 'REGB5',
        type: 'Output',
        inputs: { IN: 'REGB.REGB5' },
        outputs: { OUT: false }
    },
    {
        id: 'REGB6',
        type: 'Output',
        inputs: { IN: 'REGB.REGB6' },
        outputs: { OUT: false }
    },
    {
        id: 'REGB7',
        type: 'Output',
        inputs: { IN: 'REGB.REGB7' },
        outputs: { OUT: false }
    },
    {
        id: 'REGSUM',
        type: 'SUMREGISTER',
        inputs: {
            A0: 'REGA0.OUT',
            A1: 'REGA1.OUT',
            A2: 'REGA2.OUT',
            A3: 'REGA3.OUT',
            A4: 'REGA4.OUT',
            A5: 'REGA5.OUT',
            A6: 'REGA6.OUT',
            A7: 'REGA7.OUT',
            B0: 'REGB0.OUT',
            B1: 'REGB1.OUT',
            B2: 'REGB2.OUT',
            B3: 'REGB3.OUT',
            B4: 'REGB4.OUT',
            B5: 'REGB5.OUT',
            B6: 'REGB6.OUT',
            B7: 'REGB7.OUT',
            SU: 'SU.OUT',
            EO: 'EO.OUT'
        }
    },
    {
        id: 'REGSUM0',
        type: 'Output',
        inputs: { IN: 'REGSUM.SUM0' },
        outputs: { OUT: false }
    },
    {
        id: 'REGSUM1',
        type: 'Output',
        inputs: { IN: 'REGSUM.SUM1' },
        outputs: { OUT: false }
    },
    {
        id: 'REGSUM2',
        type: 'Output',
        inputs: { IN: 'REGSUM.SUM2' },
        outputs: { OUT: false }
    },
    {
        id: 'REGSUM3',
        type: 'Output',
        inputs: { IN: 'REGSUM.SUM3' },
        outputs: { OUT: false }
    },
    {
        id: 'REGSUM4',
        type: 'Output',
        inputs: { IN: 'REGSUM.SUM4' },
        outputs: { OUT: false }
    },
    {
        id: 'REGSUM5',
        type: 'Output',
        inputs: { IN: 'REGSUM.SUM5' },
        outputs: { OUT: false }
    },
    {
        id: 'REGSUM6',
        type: 'Output',
        inputs: { IN: 'REGSUM.SUM6' },
        outputs: { OUT: false }
    },
    {
        id: 'REGSUM7',
        type: 'Output',
        inputs: { IN: 'REGSUM.SUM7' },
        outputs: { OUT: false }
    },
    {
        id: 'ISCARRY',
        type: 'Output',
        inputs: { IN: 'REGSUM.ISCARRY' },
        outputs: { OUT: false }
    },
    {
        id: 'ISZERO',
        type: 'Output',
        inputs: { IN: 'REGSUM.ISZERO' },
        outputs: { OUT: false }
    },
    {
        id: 'FLAGSREGISTER',
        type: 'FLAGSREGISTER',
        inputs: { ISCARRY: 'REGSUM.ISCARRY', ISZERO: 'REGSUM.ISZERO', CLK: 'CLK.OUT', CLR: 'CLR.OUT', FI: 'FI.OUT' }
    },
    {
        id: 'CF',
        type: 'Output',
        inputs: { IN: 'FLAGSREGISTER.CF' },
        outputs: { OUT: false }
    },
    {
        id: 'ZF',
        type: 'Output',
        inputs: { IN: 'FLAGSREGISTER.ZF' },
        outputs: { OUT: false }
    },
    {
        id: 'REGI',
        type: 'INSTRUCTIONREGISTER',
        inputs: {
            D0: 'BUS0.OUT',
            D1: 'BUS1.OUT',
            D2: 'BUS2.OUT',
            D3: 'BUS3.OUT',
            D4: 'BUS4.OUT',
            D5: 'BUS5.OUT',
            D6: 'BUS6.OUT',
            D7: 'BUS7.OUT',
            II: 'II.OUT',
            IO: 'IO.OUT',
            CLK: 'CLK.OUT',
            CLR: 'CLR.OUT'
        }
    },
    {
        id: 'REGI0',
        type: 'Output',
        inputs: { IN: 'REGI.REGI0' },
        outputs: { OUT: false }
    },
    {
        id: 'REGI1',
        type: 'Output',
        inputs: { IN: 'REGI.REGI1' },
        outputs: { OUT: false }
    },
    {
        id: 'REGI2',
        type: 'Output',
        inputs: { IN: 'REGI.REGI2' },
        outputs: { OUT: false }
    },
    {
        id: 'REGI3',
        type: 'Output',
        inputs: { IN: 'REGI.REGI3' },
        outputs: { OUT: false }
    },
    {
        id: 'REGI4',
        type: 'Output',
        inputs: { IN: 'REGI.REGI4' },
        outputs: { OUT: false }
    },
    {
        id: 'REGI5',
        type: 'Output',
        inputs: { IN: 'REGI.REGI5' },
        outputs: { OUT: false }
    },
    {
        id: 'REGI6',
        type: 'Output',
        inputs: { IN: 'REGI.REGI6' },
        outputs: { OUT: false }
    },
    {
        id: 'REGI7',
        type: 'Output',
        inputs: { IN: 'REGI.REGI7' },
        outputs: { OUT: false }
    },
    {
        id: 'REGO',
        type: 'OUTPUTREGISTER',
        inputs: {
            D0: 'BUS0.OUT',
            D1: 'BUS1.OUT',
            D2: 'BUS2.OUT',
            D3: 'BUS3.OUT',
            D4: 'BUS4.OUT',
            D5: 'BUS5.OUT',
            D6: 'BUS6.OUT',
            D7: 'BUS7.OUT',
            OI: 'OI.OUT',
            CLK: 'CLK.OUT',
            CLR: 'CLR.OUT'
        }
    },
    {
        id: 'REGO0',
        type: 'Output',
        inputs: { IN: 'REGO.REGO0' },
        outputs: { OUT: false }
    },
    {
        id: 'REGO1',
        type: 'Output',
        inputs: { IN: 'REGO.REGO1' },
        outputs: { OUT: false }
    },
    {
        id: 'REGO2',
        type: 'Output',
        inputs: { IN: 'REGO.REGO2' },
        outputs: { OUT: false }
    },
    {
        id: 'REGO3',
        type: 'Output',
        inputs: { IN: 'REGO.REGO3' },
        outputs: { OUT: false }
    },
    {
        id: 'REGO4',
        type: 'Output',
        inputs: { IN: 'REGO.REGO4' },
        outputs: { OUT: false }
    },
    {
        id: 'REGO5',
        type: 'Output',
        inputs: { IN: 'REGO.REGO5' },
        outputs: { OUT: false }
    },
    {
        id: 'REGO6',
        type: 'Output',
        inputs: { IN: 'REGO.REGO6' },
        outputs: { OUT: false }
    },
    {
        id: 'REGO7',
        type: 'Output',
        inputs: { IN: 'REGO.REGO7' },
        outputs: { OUT: false }
    },
    {
        id: 'MAR',
        type: 'MAR',
        inputs: {
            DIPD0: 'DIPA0.OUT', 
            DIPD1: 'DIPA1.OUT', 
            DIPD2: 'DIPA2.OUT', 
            DIPD3: 'DIPA3.OUT',
            D0: 'BUS0.OUT',
            D1: 'BUS1.OUT',
            D2: 'BUS2.OUT',
            D3: 'BUS3.OUT',
            MI: 'MI.OUT',
            CLK: 'CLK.OUT',
            CLR: 'CLR.OUT',
            MODE: 'MODE.OUT'
        }
    },
    {
        id: 'MODE',
        type: 'Input',
        outputs: { OUT: true }
    },
    {
        id: 'WRITE',
        type: 'Input',
        outputs: { OUT: false }
    },
    {
        id: 'DIPA0',
        type: 'Input',
        outputs: { OUT: false }
    },
    {
        id: 'DIPA1',
        type: 'Input',
        outputs: { OUT: false }
    },
    {
        id: 'DIPA2',
        type: 'Input',
        outputs: { OUT: false }
    },
    {
        id: 'DIPA3',
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
        id: 'MEMORYCONTENTS',
        type: 'MEMORYCONTENTS',
        inputs: {
            DIPD0: 'DIPD0.OUT', DIPD1: 'DIPD1.OUT', DIPD2: 'DIPD2.OUT', DIPD3: 'DIPD3.OUT', DIPD4: 'DIPD4.OUT', DIPD5: 'DIPD5.OUT', DIPD6: 'DIPD6.OUT', DIPD7: 'DIPD7.OUT',
            D0: 'BUS0.OUT', D1: 'BUS1.OUT', D2: 'BUS2.OUT', D3: 'BUS3.OUT', D4: 'BUS4.OUT', D5: 'BUS5.OUT', D6: 'BUS6.OUT', D7: 'BUS7.OUT',
            A0: 'MAR.REG0', A1: 'MAR.REG1', A2: 'MAR.REG2', A3: 'MAR.REG3',
            MODE: 'MODE.OUT', WRITE: 'WRITE.OUT', CLK: 'CLK.OUT', RI: 'RI.OUT', RO: 'RO.OUT'
        }
    },
    {
        id: 'ADDR0',
        type: 'Output',
        inputs: { IN: 'MAR.REG0' },
        outputs: { OUT: false }
    },
    {
        id: 'ADDR1',
        type: 'Output',
        inputs: { IN: 'MAR.REG1' },
        outputs: { OUT: false }
    },
    {
        id: 'ADDR2',
        type: 'Output',
        inputs: { IN: 'MAR.REG2' },
        outputs: { OUT: false }
    },
    {
        id: 'ADDR3',
        type: 'Output',
        inputs: { IN: 'MAR.REG3' },
        outputs: { OUT: false }
    },
    {
        id: 'RAM0',
        type: 'Output',
        inputs: { IN: 'MEMORYCONTENTS.RAM0' },
        outputs: { OUT: false }
    },
    {
        id: 'RAM1',
        type: 'Output',
        inputs: { IN: 'MEMORYCONTENTS.RAM1' },
        outputs: { OUT: false }
    },
    {
        id: 'RAM2',
        type: 'Output',
        inputs: { IN: 'MEMORYCONTENTS.RAM2' },
        outputs: { OUT: false }
    },
    {
        id: 'RAM3',
        type: 'Output',
        inputs: { IN: 'MEMORYCONTENTS.RAM3' },
        outputs: { OUT: false }
    },
    {
        id: 'RAM4',
        type: 'Output',
        inputs: { IN: 'MEMORYCONTENTS.RAM4' },
        outputs: { OUT: false }
    },
    {
        id: 'RAM5',
        type: 'Output',
        inputs: { IN: 'MEMORYCONTENTS.RAM5' },
        outputs: { OUT: false }
    },
    {
        id: 'RAM6',
        type: 'Output',
        inputs: { IN: 'MEMORYCONTENTS.RAM6' },
        outputs: { OUT: false }
    },
    {
        id: 'RAM7',
        type: 'Output',
        inputs: { IN: 'MEMORYCONTENTS.RAM7' },
        outputs: { OUT: false }
    },
    {
        id: 'OPCODECOUNTER',
        type: 'OPCODECOUNTER',
        inputs: { CLK: 'CLOCK.~CLK', CLR: 'CLR.OUT' }
    },
    {
        id: 'OPCODE0',
        type: 'Output',
        inputs: { IN: 'OPCODECOUNTER.Q0' },
        outputs: { OUT: false }
    },
    {
        id: 'OPCODE1',
        type: 'Output',
        inputs: { IN: 'OPCODECOUNTER.Q1' },
        outputs: { OUT: false }
    },
    {
        id: 'OPCODE2',
        type: 'Output',
        inputs: { IN: 'OPCODECOUNTER.Q2' },
        outputs: { OUT: false }
    },
    {
        id: 'OPCODET0',
        type: 'Output',
        inputs: { IN: 'OPCODECOUNTER.T0' },
        outputs: { OUT: false }
    },
    {
        id: 'OPCODET1',
        type: 'Output',
        inputs: { IN: 'OPCODECOUNTER.T1' },
        outputs: { OUT: false }
    },
    {
        id: 'OPCODET2',
        type: 'Output',
        inputs: { IN: 'OPCODECOUNTER.T2' },
        outputs: { OUT: false }
    },
    {
        id: 'OPCODET3',
        type: 'Output',
        inputs: { IN: 'OPCODECOUNTER.T3' },
        outputs: { OUT: false }
    },
    {
        id: 'OPCODET4',
        type: 'Output',
        inputs: { IN: 'OPCODECOUNTER.T4' },
        outputs: { OUT: false }
    },
    {
        id: 'INSTRUCTINODECODER',
        type: 'INSTRUCTIONDECODER',
        inputs: {
            T0: 'OPCODET0.OUT', T1: 'OPCODET1.OUT', T2: 'OPCODET2.OUT', T3: 'OPCODET3.OUT', T4: 'OPCODET4.OUT',
            I0: 'REGI4.OUT', I1: 'REGI5.OUT', I2: 'REGI6.OUT', I3: 'REGI7.OUT', CF: 'CF.OUT', ZF: 'ZF.OUT'
        }
    },
    {
        id: 'HLT',
        type: 'Output',
        inputs: { IN: 'INSTRUCTINODECODER.HLT' },
        outputs: { OUT: false }
    },
    {
        id: 'MI',
        type: 'Output',
        inputs: { IN: 'INSTRUCTINODECODER.MI' },
        outputs: { OUT: false }
    },
    {
        id: 'RI',
        type: 'Output',
        inputs: { IN: 'INSTRUCTINODECODER.RI' },
        outputs: { OUT: false }
    },
    {
        id: 'RO',
        type: 'Output',
        inputs: { IN: 'INSTRUCTINODECODER.RO' },
        outputs: { OUT: false }
    },
    {
        id: 'IO',
        type: 'Output',
        inputs: { IN: 'INSTRUCTINODECODER.IO' },
        outputs: { OUT: false }
    },
    {
        id: 'II',
        type: 'Output',
        inputs: { IN: 'INSTRUCTINODECODER.II' },
        outputs: { OUT: false }
    },
    {
        id: 'CE',
        type: 'Output',
        inputs: { IN: 'INSTRUCTINODECODER.CE' },
        outputs: { OUT: false }
    },
    {
        id: 'CO',
        type: 'Output',
        inputs: { IN: 'INSTRUCTINODECODER.CO' },
        outputs: { OUT: false }
    },
    {
        id: 'AI',
        type: 'Output',
        inputs: { IN: 'INSTRUCTINODECODER.AI' },
        outputs: { OUT: false }
    },
    {
        id: 'AO',
        type: 'Output',
        inputs: { IN: 'INSTRUCTINODECODER.AO' },
        outputs: { OUT: false }
    },
    {
        id: 'EO',
        type: 'Output',
        inputs: { IN: 'INSTRUCTINODECODER.EO' },
        outputs: { OUT: false }
    },
    {
        id: 'FI',
        type: 'Output',
        inputs: { IN: 'INSTRUCTINODECODER.FI' },
        outputs: { OUT: false }
    },
    {
        id: 'SU',
        type: 'Output',
        inputs: { IN: 'INSTRUCTINODECODER.SU' },
        outputs: { OUT: false }
    },
    {
        id: 'BI',
        type: 'Output',
        inputs: { IN: 'INSTRUCTINODECODER.BI' },
        outputs: { OUT: false }
    },
    {
        id: 'OI',
        type: 'Output',
        inputs: { IN: 'INSTRUCTINODECODER.OI' },
        outputs: { OUT: false }
    },
    {
        id: 'J',
        type: 'Output',
        inputs: { IN: 'INSTRUCTINODECODER.J' },
        outputs: { OUT: false }
    },
    {
        id: 'notmode',
        type: 'NOT',
        inputs: { IN: 'MODE.OUT' }
    },
    {
        id: 'RUNMODE',
        type: 'Output',
        inputs: { IN: 'MODE.OUT' },
        outputs: { OUT: false }
    },
    {
        id: 'PROGRAMMODE',
        type: 'Output',
        inputs: { IN: 'notmode.OUT' },
        outputs: { OUT: false }
    }
];