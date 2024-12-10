import { SearchDirection, WordGrid } from "../types";
import { isPositionWithinGrid } from "./grid-validation";

export const doesWordMatchFromPosition = (
  grid: WordGrid,
  targetWord: string,
  startRow: number,
  startCol: number,
  direction: SearchDirection
): boolean => {
  return targetWord.split("").every((letter, index) => {
    const currentRow = startRow + direction.verticalStep * index;
    const currentCol = startCol + direction.horizontalStep * index;

    return (
      isPositionWithinGrid(currentRow, currentCol, grid) &&
      grid.content[currentRow][currentCol] === letter
    );
  });
};
