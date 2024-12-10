export type Instruction = {
  x: number;
  y: number;
  enabled: boolean;
};

export type AnalysisResult = {
  naturalSum: number;
  conditionalSum: number;
};

export type ParsingState = {
  enabled: boolean;
  position: number;
};
