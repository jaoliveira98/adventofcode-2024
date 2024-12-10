import { Report } from "../types";

const MIN_DIFFERENCE = 1;
const MAX_DIFFERENCE = 3;

export const isReportSafe = (report: Report): boolean => {
  if (report.length < 2) return true;

  const isFirstDifferencePositive = report[1] - report[0] > 0;

  return report.every((num, i) => {
    if (i === 0) return true;

    const difference = num - report[i - 1];
    const absDifference = Math.abs(difference);

    return (
      absDifference >= MIN_DIFFERENCE &&
      absDifference <= MAX_DIFFERENCE &&
      isFirstDifferencePositive === difference > 0
    );
  });
};
