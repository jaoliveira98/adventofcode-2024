import { Report } from "../types";

export const parseReports = (data: string): Report[] => {
  return data
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => line.trim().split(/\s+/).map(Number));
};
