import { Report } from "../types";
import { isReportSafe } from "./check-report-safety";

export const isSafeWithTolerance = (report: Report): boolean => {
  if (isReportSafe(report)) return true;

  return report.some((entry, skipIndex) => {
    const modifiedReport = [
      ...report.slice(0, skipIndex),
      ...report.slice(skipIndex + 1),
    ];
    return isReportSafe(modifiedReport);
  });
};
