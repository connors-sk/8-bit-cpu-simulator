import { dlatch } from './latches/dlatch';
import { gatedsrlatch } from './latches/gatedlatch';
import { memory1 } from './latches/memory1';
import { memory8 } from './latches/memory8';
import { srlatch } from './latches/srlatch';
import { Circuit } from './types';

export const latches: Circuit[] = [
  srlatch,
  gatedsrlatch,
  dlatch,
  memory1,
  memory8
];
