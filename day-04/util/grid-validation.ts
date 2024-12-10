import { WordGrid } from "../types";

export const isPositionWithinGrid = (
  row: number,
  col: number,
  grid: WordGrid
): boolean => {
  return row >= 0 && row < grid.rows && col >= 0 && col < grid.columns;
};
