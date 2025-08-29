export type Element =
  | Input
  | Output
  | Bus
  | BusPullDown
  | TriState
  | TriState1
  | TriState4
  | TriState8
  | NAND
  | NAND3
  | AND
  | AND3
  | AND4
  | OR
  | OR3
  | OR4
  | OR5
  | OR8
  | NOR
  | XOR
  | NOT
  | MUX
  | MUX4
  | MUX8
  | HALFADDER
  | FULLADDER
  | ADDER4
  | ADDER8
  | ALU
  | ISZERO
  | DFF
  | JKFF
  | REGISTER1
  | REGISTER2
  | REGISTER4
  | REGISTER8
  | COUNTER1
  | COUNTER4
  | DECODER3TO8
  | DECODER4TO16
  | SRLATCH
  | GATEDSRLATCH
  | DLATCH
  | MEMORY1
  | MEMORY8
  | RAM
  | EDGEDETECTOR
  | PC
  | REGISTERA
  | REGISTERB
  | SUMREGISTER
  | FLAGSREGISTER
  | INSTRUCTIONREGISTER
  | OUTPUTREGISTER
  | MAR
  | MEMORYCONTENTS
  | OPCODECOUNTER
  | INSTRUCTIONDECODER
  | CLOCK
  ;

export type State = boolean | 'X';

export interface Input {
  id: string;
  type: 'Input';
  parentType?: string;
  inputs?: {
    IN: string;
    [key: string]: string;
  };
  outputs: {
    OUT: State;
    [key: string]: State;
  };
}

export interface Output {
  id: string;
  type: 'Output';
  parentType?: string;
  inputs: {
    IN: string;
    [key: string]: string;
  };
  outputs: {
    OUT: State;
    [key: string]: State;
  };
}

export interface TriState {
  id: string;
  type: 'TriState';
  parentType?: string;
  inputs: {
    IN: string;
    SEL: string;
    [key: string]: string;
  };
  outputs: {
    OUT: State;
    [key: string]: State;
  };
}

export interface TriState1 {
  id: string;
  type: 'TriState1';
  parentType?: string;
  inputs: {
    IN: string;
    SEL: string;
    [key: string]: string;
  };
}

export interface TriState4 {
  id: string;
  type: 'TriState4';
  parentType?: string;
  inputs: {
    IN0: string;
    IN1: string;
    IN2: string;
    IN3: string;
    SEL: string;
    [key: string]: string;
  };
}

export interface TriState8 {
  id: string;
  type: 'TriState8';
  parentType?: string;
  inputs: {
    IN0: string;
    IN1: string;
    IN2: string;
    IN3: string;
    IN4: string;
    IN5: string;
    IN6: string;
    IN7: string;
    SEL: string;
    [key: string]: string;
  };
}

export interface Bus {
  id: string;
  type: 'Bus';
  parentType?: string;
  inputs: {
    [key: string]: string;
  };
  outputs: {
    OUT: State;
    [key: string]: State;
  };
}

export interface BusPullDown {
  id: string;
  type: 'BusPullDown';
  parentType?: string;
  inputs: {
    [key: string]: string;
  };
  outputs: {
    OUT: State;
    [key: string]: State;
  };
}

export interface NAND {
  id: string;
  type: 'NAND';
  parentType?: string;
  inputs: {
    A: string;
    B: string;
    [key: string]: string;
  };
  outputs: {
    OUT: State;
    [key: string]: State;
  };
}

export interface NAND3 {
  id: string;
  type: 'NAND3';
  inputs: {
    A: string;
    B: string;
    C: string;
    [key: string]: string;
  };
}

export interface AND {
  id: string;
  type: 'AND';
  inputs: {
    A: string;
    B: string;
    [key: string]: string;
  };
}

export interface AND3 {
  id: string;
  type: 'AND3';
  inputs: {
    A: string;
    B: string;
    C: string;
    [key: string]: string;
  };
}

export interface AND4 {
  id: string;
  type: 'AND4';
  inputs: {
    A: string;
    B: string;
    C: string;
    D: string;
    [key: string]: string;
  };
}

export interface NOT {
  id: string;
  type: 'NOT';
  inputs: {
    IN: string;
    [key: string]: string;
  };
}

export interface OR {
  id: string;
  type: 'OR';
  inputs: {
    A: string;
    B: string;
    [key: string]: string;
  };
}

export interface OR3 {
  id: string;
  type: 'OR3';
  inputs: {
    A: string;
    B: string;
    C: string;
    [key: string]: string;
  };
}

export interface OR4 {
  id: string;
  type: 'OR4';
  inputs: {
    A: string;
    B: string;
    C: string;
    D: string;
    [key: string]: string;
  };
}

export interface OR5 {
  id: string;
  type: 'OR5';
  inputs: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
    [key: string]: string;
  };
}

export interface OR8 {
  id: string;
  type: 'OR8';
  inputs: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
    F: string;
    G: string;
    H: string;
    [key: string]: string;
  };
}

export interface NOR {
  id: string;
  type: 'NOR';
  inputs: {
    A: string;
    B: string;
    [key: string]: string;
  };
}

export interface XOR {
  id: string;
  type: 'XOR';
  inputs: {
    A: string;
    B: string;
    [key: string]: string;
  };
}

export interface HALFADDER {
  id: string;
  type: 'HALFADDER';
  inputs: {
    A: string;
    B: string;
    [key: string]: string;
  };
}

export interface MUX {
  id: string;
  type: 'MUX';
  inputs: {
    A: string;
    B: string;
    SEL: string;
    [key: string]: string;
  };
}

export interface MUX4 {
  id: string;
  type: 'MUX4';
  inputs: {
    A0: string;
    A1: string;
    A2: string;
    A3: string;
    B0: string;
    B1: string;
    B2: string;
    B3: string;
    SEL: string;
    [key: string]: string;
  };
}

export interface MUX8 {
  id: string;
  type: 'MUX8';
  inputs: {
    A0: string;
    A1: string;
    A2: string;
    A3: string;
    A4: string;
    A5: string;
    A6: string;
    A7: string;
    B0: string;
    B1: string;
    B2: string;
    B3: string;
    B4: string;
    B5: string;
    B6: string;
    B7: string;
    SEL: string;
    [key: string]: string;
  };
}

export interface FULLADDER {
  id: string;
  type: 'FULLADDER';
  inputs: {
    A: string;
    B: string;
    CI: string;
    [key: string]: string;
  };
}

export interface ADDER4 {
  id: string;
  type: 'ADDER4';
  inputs: {
    A0: string;
    A1: string;
    A2: string;
    A3: string;
    B0: string;
    B1: string;
    B2: string;
    B3: string;
    CI: string;
    [key: string]: string;
  };
}

export interface ADDER8 {
  id: string;
  type: 'ADDER8';
  inputs: {
    A0: string;
    A1: string;
    A2: string;
    A3: string;
    A4: string;
    A5: string;
    A6: string;
    A7: string;
    B0: string;
    B1: string;
    B2: string;
    B3: string;
    B4: string;
    B5: string;
    B6: string;
    B7: string;
    CI: string;
    [key: string]: string;
  };
}

export interface ALU {
  id: string;
  type: 'ALU';
  inputs: {
    A0: string;
    A1: string;
    A2: string;
    A3: string;
    A4: string;
    A5: string;
    A6: string;
    A7: string;
    B0: string;
    B1: string;
    B2: string;
    B3: string;
    B4: string;
    B5: string;
    B6: string;
    B7: string;
    SU: string;
    [key: string]: string;
  };
}

export interface ISZERO {
  id: string;
  type: 'ISZERO';
  inputs: {
    D0: string;
    D1: string;
    D2: string;
    D3: string;
    D4: string;
    D5: string;
    D6: string;
    D7: string;
    [key: string]: string;
  };
}

export interface DFF {
  id: string;
  type: 'DFF';
  inputs: {
    '~SET': string;
    '~CLR': string;
    CLK: string;
    D: string;
    [key: string]: string;
  };
}

export interface JKFF {
  id: string;
  type: 'JKFF';
  inputs: {
    '~SET': string;
    '~CLR': string;
    CLK: string;
    J: string;
    K: string;
    [key: string]: string;
  };
}

export interface REGISTER1 {
  id: string;
  type: 'REGISTER1';
  inputs: {
    LOAD: string;
    D: string;
    CLK: string;
    CLR: string;
    [key: string]: string;
  };
}

export interface REGISTER2 {
  id: string;
  type: 'REGISTER2';
  inputs: {
    LOAD: string;
    D0: string;
    D1: string;
    CLK: string;
    CLR: string;
    [key: string]: string;
  };
}

export interface REGISTER4 {
  id: string;
  type: 'REGISTER4';
  inputs: {
    LOAD: string;
    D0: string;
    D1: string;
    D2: string;
    D3: string;
    CLK: string;
    CLR: string;
    [key: string]: string;
  };
}

export interface REGISTER8 {
  id: string;
  type: 'REGISTER8';
  inputs: {
    LOAD: string;
    D0: string;
    D1: string;
    D2: string;
    D3: string;
    D4: string;
    D5: string;
    D6: string;
    D7: string;
    CLK: string;
    CLR: string;
    [key: string]: string;
  };
}

export interface COUNTER1 {
  id: string;
  type: 'COUNTER1';
  inputs: {
    ENABLE: string;
    LOAD: string;
    D: string;
    CLK: string;
    CLR: string;
    [key: string]: string;
  };
}

export interface COUNTER4 {
  id: string;
  type: 'COUNTER4';
  inputs: {
    ENABLE: string;
    LOAD: string;
    A: string;
    B: string;
    C: string;
    D: string;
    CLK: string;
    CLR: string;
    [key: string]: string;
  };
}

export interface DECODER3TO8 {
  id: string;
  type: 'DECODER3TO8';
  inputs: {
    A0: string;
    A1: string;
    A2: string;
    [key: string]: string;
  };
}

export interface DECODER4TO16 {
  id: string;
  type: 'DECODER4TO16';
  inputs: {
    A0: string;
    A1: string;
    A2: string;
    A3: string;
    [key: string]: string;
  };
}

export interface SRLATCH {
  id: string;
  type: 'SRLATCH';
  inputs: {
    R: string;
    S: string;
    [key: string]: string;
  };
}

export interface GATEDSRLATCH {
  id: string;
  type: 'GATEDSRLATCH';
  inputs: {
    R: string;
    S: string;
    W: string;
    [key: string]: string;
  };
}

export interface DLATCH {
  id: string;
  type: 'DLATCH';
  inputs: {
    D: string;
    W: string;
    [key: string]: string;
  };
}

export interface MEMORY1 {
  id: string;
  type: 'MEMORY1';
  inputs: {
    D: string;
    W: string;
    E: string;
    [key: string]: string;
  };
}

export interface MEMORY8 {
  id: string;
  type: 'MEMORY8';
  inputs: {
    W: string;
    E: string;
    SEL: string;
    D0: string;
    D1: string;
    D2: string;
    D3: string;
    D4: string;
    D5: string;
    D6: string;
    D7: string;
    [key: string]: string;
  };
}

export interface RAM {
  id: string;
  type: 'RAM';
  inputs: {
    A0: string;
    A1: string;
    A2: string;
    A3: string;
    D0: string;
    D1: string;
    D2: string;
    D3: string;
    D4: string;
    D5: string;
    D6: string;
    D7: string;
    W: string;
    E: string;
    [key: string]: string;
  };
}

export interface EDGEDETECTOR {
  id: string;
  type: 'EDGEDETECTOR',
  inputs: {
    IN: string,
    [key: string]: string;
  }
}

export interface PC {
  id: string;
  type: 'PC';
  inputs: {
    A: string;
    B: string;
    C: string;
    D: string;
    J: string;
    CO: string;
    CE: string;
    CLK: string;
    CLR: string;
    [key: string]: string;
  };
}

export interface REGISTERA {
  id: string;
  type: 'REGISTERA';
  inputs: {
    D0: string;
    D1: string;
    D2: string;
    D3: string;
    D4: string;
    D5: string;
    D6: string;
    D7: string;
    AI: string;
    AO: string;
    CLK: string;
    CLR: string;
    [key: string]: string;
  };
}

export interface REGISTERB {
  id: string;
  type: 'REGISTERB';
  inputs: {
    D0: string;
    D1: string;
    D2: string;
    D3: string;
    D4: string;
    D5: string;
    D6: string;
    D7: string;
    BI: string;
    BO: string;
    CLK: string;
    CLR: string;
    [key: string]: string;
  };
}

export interface SUMREGISTER {
  id: string;
  type: 'SUMREGISTER';
  inputs: {
    A0: string;
    A1: string;
    A2: string;
    A3: string;
    A4: string;
    A5: string;
    A6: string;
    A7: string;
    B0: string;
    B1: string;
    B2: string;
    B3: string;
    B4: string;
    B5: string;
    B6: string;
    B7: string;
    SU: string;
    EO: string;
    [key: string]: string;
  };
}

export interface FLAGSREGISTER {
  id: string;
  type: 'FLAGSREGISTER';
  inputs: {
    ISCARRY: string;
    ISZERO: string;
    CLK: string;
    CLR: string;
    FI: string;
    [key: string]: string;
  }
}

export interface INSTRUCTIONREGISTER {
  id: string;
  type: 'INSTRUCTIONREGISTER';
  inputs: {
    D0: string;
    D1: string;
    D2: string;
    D3: string;
    D4: string;
    D5: string;
    D6: string;
    D7: string;
    II: string;
    IO: string;
    CLK: string;
    CLR: string;
    [key: string]: string;
  };
}

export interface OUTPUTREGISTER {
  id: string;
  type: 'OUTPUTREGISTER';
  inputs: {
    D0: string;
    D1: string;
    D2: string;
    D3: string;
    D4: string;
    D5: string;
    D6: string;
    D7: string;
    OI: string;
    CLK: string;
    CLR: string;
    [key: string]: string;
  };
}

export interface MAR {
  id: string;
  type: 'MAR';
  inputs: {
    D0: string;
    D1: string;
    D2: string;
    D3: string;
    DIPD0: string;
    DIPD1: string;
    DIPD2: string;
    DIPD3: string;
    MI: string;
    CLK: string;
    CLR: string;
    MODE: string;
    [key: string]: string;
  };
}

export interface MEMORYCONTENTS {
  id: string;
  type: 'MEMORYCONTENTS';
  inputs: {
    MODE: string;
    WRITE: string;
    RI: string;
    RO: string;
    CLK: string;
    A0: string;
    A1: string;
    A2: string;
    A3: string;
    DIPD0: string;
    DIPD1: string;
    DIPD2: string;
    DIPD3: string;
    DIPD4: string;
    DIPD5: string;
    DIPD6: string;
    DIPD7: string;
    D0: string;
    D1: string;
    D2: string;
    D3: string;
    D4: string;
    D5: string;
    D6: string;
    D7: string;
    [key: string]: string;
  };
}

export interface OPCODECOUNTER {
  id: string;
  type: 'OPCODECOUNTER';
  inputs: {
    CLK: string;
    CLR: string;
    [key: string]: string;
  };
}

export interface INSTRUCTIONDECODER {
  id: string;
  type: 'INSTRUCTIONDECODER';
  inputs: {
    T0: string;
    T1: string;
    T2: string;
    T3: string;
    T4: string;
    I0: string;
    I1: string;
    I2: string;
    I3: string;
    CF: string;
    ZF: string;
    [key: string]: string;
  };
}

export interface CLOCK {
  id: string;
  type: 'CLOCK';
  inputs: {
    OSC: string;
    HLT: string;
    [key: string]: string;
  };
}

export interface Circuit {
  id: string;
  parts: Element[];
}
