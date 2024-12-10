import { AnalysisResult } from "./type";
import { findValidInstructions } from "./util/find-valid-instructions";

export const processMemory = (input: string): AnalysisResult => {
  const instructions = findValidInstructions(input);

  const { naturalSum, conditionalSum } = instructions.reduce(
    (acc, instruction) => {
      const value = instruction.x * instruction.y;
      return {
        naturalSum: acc.naturalSum + value,
        conditionalSum: acc.conditionalSum + (instruction.enabled ? value : 0),
      };
    },
    { naturalSum: 0, conditionalSum: 0 }
  );

  return {
    naturalSum: naturalSum,
    conditionalSum: conditionalSum,
  };
};

const input = ``;

console.log(processMemory(input));
