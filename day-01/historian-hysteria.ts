import { LocationAnalysis, LocationPair } from "./types";
import { calculateDistance } from "./util/calculate-distance";
import { calculateSimilarity } from "./util/calculate-similarity";
import { parseLocationPairs } from "./util/parse-location-pairs";

export const analyzeLocations = (locationData: string): LocationAnalysis => {
  if (!locationData.trim()) {
    return { totalDistance: 0, similarityScore: 0 };
  }

  const pairs = parseLocationPairs(locationData);

  return {
    totalDistance: calculateDistance(pairs),
    similarityScore: calculateSimilarity(pairs),
  };
};

const data = ``;

console.log(analyzeLocations(data));
