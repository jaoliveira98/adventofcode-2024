export type SearchDirection = {
  horizontalStep: number;
  verticalStep: number;
};

export type GridPosition = {
  row: number;
  col: number;
};

export type WordGrid = {
  content: string[][];
  rows: number;
  columns: number;
};

export type SearchResults = {
  totalMatches: number;
};
