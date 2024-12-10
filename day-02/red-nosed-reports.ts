import { AnalysisResult } from "./types";
import { isReportSafe } from "./util/check-report-safety";
import { isSafeWithTolerance } from "./util/check-report-with-tolerance";
import { parseReports } from "./util/parse-reports";

export const analyzeSafetyReports = (reportsData: string): AnalysisResult => {
  const reports = parseReports(reportsData);

  const countReports = (predicate: (report: number[]) => boolean) =>
    reports.filter(predicate).length;

  return {
    natural: countReports(isReportSafe),
    tolerant: countReports(isSafeWithTolerance),
  };
};

const data = ``;

console.log(analyzeSafetyReports(data));
