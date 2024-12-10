export const parseControlInstruction = (
  text: string
): [boolean | null, number] => {
  // Check for do() instruction
  if (text.startsWith("do()")) {
    return [true, 4];
  }

  // Check for don't() instruction
  if (text.startsWith("don't()")) {
    return [false, 7];
  }

  return [null, 0];
};
