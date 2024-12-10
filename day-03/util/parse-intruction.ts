import { Instruction } from "../type";

const isValidNumber = (num: string): boolean => /^\d{1,3}$/.test(num);

export const parseMultiplication = (
  text: string,
  enabled: boolean
): [Instruction | null, number] => {
  const mulRegex = /^mul\((\d{1,3}),(\d{1,3})\)/;
  const match = text.match(mulRegex);

  if (match && match[1] && match[2]) {
    const x = match[1];
    const y = match[2];

    if (isValidNumber(x) && isValidNumber(y)) {
      return [
        {
          x: parseInt(x, 10),
          y: parseInt(y, 10),
          enabled,
        },
        match[0].length,
      ];
    }
  }

  return [null, 0];
};
