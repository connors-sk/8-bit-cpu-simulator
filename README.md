# 8-bit CPU Emulator
Emulator for [Ben Eater's 8-bit computer](https://www.youtube.com/playlist?list=PLowKtXNTBypGqImE405J2565dvjafglHU), emulated down to nand gate level and written in Typescript.

Hosted [HERE](https://connors-sk.github.io/8-bit-cpu-simulator/).

Code for emulation inspired by [Digital Circuit Simulator in JavaScript: 7400 Subscriber Special!](https://www.youtube.com/watch?v=anZPHeA0WKU&t=7s&ab_channel=LowByteProductions)

SVGs for diagrams created in [Digital](https://github.com/hneemann/Digital).

## Supported instructions
```
(0000) NOP + value: No Operation is performed.
(0001) LDA + value: Loads number from RAM using value as Memory address to A Register.
(0010) ADD + value: Loads number from RAM using value as Memory address to B Register. Stores the sum of A and B Register to A Register.
(0011) SUB + value: Loads number from RAM using value as Memory address to B Register. Stores the difference of A and B Register to A Register.
(0100) STA + value: Stores A Register to RAM using value as Memory Address.
(0101) LDI + value: Loads value into A Register.
(0110) JMP + value: Sets counter to value.
(0111) JC + value: Similar to jump instruction, but gets performed only if Carry flag is set
(1000) JZ + value: Similar to jump instruction, but gets performed only if the Zero flag is set
(1110) OUT: Copies A Register to Out Register, shows result in the 7 segment display
(1111) HLT: Halts the clock, stops the execution
```

## Flags register
```
Zero Flag: Gets set if ADD or SUB instructions result in value zero
Carry Flag: Gets set if ADD or SUB instruction overflow (the result value is bigger than 8 bit)
```

## Credits
[Source code for the Fibonacci program](https://theshamblog.com/programs-and-more-commands-for-the-ben-eater-8-bit-breadboard-computer/)
