import { Instruction, ParsingState } from "../type";
import { parseControlInstruction } from "./parse-control-instruction";
import { parseMultiplication } from "./parse-intruction";

export const findValidInstructions = (text: string): Instruction[] => {
  const instructions: Instruction[] = [];
  const state: ParsingState = {
    enabled: true,
    position: 0,
  };

  while (state.position < text.length) {
    const remainingText = text.slice(state.position);

    // Look for control instructions
    const doIndex = remainingText.indexOf("do()");
    const dontIndex = remainingText.indexOf("don't()");
    const mulIndex = remainingText.indexOf("mul(");

    // Find the closest instruction
    const indices = [
      doIndex !== -1 ? doIndex : Infinity,
      dontIndex !== -1 ? dontIndex : Infinity,
      mulIndex !== -1 ? mulIndex : Infinity,
    ];
    const nextIndex = Math.min(...indices);

    if (nextIndex === Infinity) break;

    const instructionText = remainingText.slice(nextIndex);

    // Try parsing as control instruction first
    const [newState, controlLength] = parseControlInstruction(instructionText);
    if (newState !== null) {
      state.enabled = newState;
      state.position += nextIndex + controlLength;
      continue;
    }

    // Try parsing as multiplication
    const [instruction, mulLength] = parseMultiplication(
      instructionText,
      state.enabled
    );
    if (instruction) {
      instructions.push(instruction);
      state.position += nextIndex + mulLength;
    } else {
      state.position += nextIndex + 1;
    }
  }

  return instructions;
};
