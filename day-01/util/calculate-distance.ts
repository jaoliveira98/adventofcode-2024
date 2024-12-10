import { LocationPair } from "../types";

export const calculateDistance = (pairs: LocationPair[]): number => {
  const leftSorted = pairs.map((pair) => pair.left).sort((a, b) => a - b);
  const rightSorted = pairs.map((pair) => pair.right).sort((a, b) => a - b);

  return leftSorted.reduce((total, _, index) => {
    const difference = Math.abs(leftSorted[index] - rightSorted[index]);

    return total + difference;
  }, 0);
};
