import { WordGrid } from "../types";

export const createWordGrid = (input: string): WordGrid => {
  const gridLines = input.trim().split("\n");
  const gridContent = gridLines.map((line) => line.trim().split(""));

  return {
    content: gridContent,
    rows: gridContent.length,
    columns: gridContent[0].length,
  };
};
