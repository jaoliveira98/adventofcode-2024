import { LocationPair } from "../types";

export const calculateSimilarity = (pairs: LocationPair[]): number => {
  const getRightFrequencies = (pairs: LocationPair[]): Map<number, number> => {
    const frequencies = new Map<number, number>();

    pairs.forEach((pair) => {
      const currentFreq = frequencies.get(pair.right) || 0;
      frequencies.set(pair.right, currentFreq + 1);
    });

    return frequencies;
  };

  const rightFrequencies = getRightFrequencies(pairs);

  return pairs.reduce((score, pair) => {
    const frequency = rightFrequencies.get(pair.left) || 0;

    return score + pair.left * frequency;
  }, 0);
};
