import {
  SearchDirection,
  GridPosition,
  WordGrid,
  SearchResults,
} from "./types";
import { createWordGrid } from "./util/create-word-grid";

import { doesWordMatchFromPosition } from "./util/search-word";

const ALL_DIRECTIONS: SearchDirection[] = [
  { horizontalStep: 1, verticalStep: 0 }, // ➡️
  { horizontalStep: -1, verticalStep: 0 }, // ⬅️
  { horizontalStep: 0, verticalStep: 1 }, // ⬇️
  { horizontalStep: 0, verticalStep: -1 }, // ⬆️
  { horizontalStep: 1, verticalStep: 1 }, // ↘️
  { horizontalStep: -1, verticalStep: -1 }, // ↖️
  { horizontalStep: 1, verticalStep: -1 }, // ↗️
  { horizontalStep: -1, verticalStep: 1 }, // ↙️
];

const findWordInGrid = (grid: WordGrid, targetWord: string): SearchResults => {
  const matchingPositions: GridPosition[] = [];

  grid.content.forEach((row, rowIndex) => {
    row.forEach((letter, colIndex) => {
      if (letter === targetWord[0]) {
        ALL_DIRECTIONS.forEach((direction) => {
          if (
            doesWordMatchFromPosition(
              grid,
              targetWord,
              rowIndex,
              colIndex,
              direction
            )
          ) {
            matchingPositions.push({ row: rowIndex, col: colIndex });
          }
        });
      }
    });
  });

  return {
    totalMatches: matchingPositions.length,
  };
};

export const findXMASPatterns = (puzzleInput: string): SearchResults => {
  const grid = createWordGrid(puzzleInput);
  return findWordInGrid(grid, "XMAS");
};

const data = ``;

console.log(findXMASPatterns(data));
