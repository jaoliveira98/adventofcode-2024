import { LocationPair } from "../types";

export const parseLocationPairs = (data: string): LocationPair[] => {
  return data
    .trim()
    .split("\n")
    .filter((line) => line.length > 0)
    .map((line) => {
      const [leftValue, rightValue] = line.split(/\s+/).filter(Boolean);

      return {
        left: Number(leftValue),
        right: Number(rightValue),
      };
    });
};
