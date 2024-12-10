import { createWordGrid } from "./create-word-grid";

describe("createWordGrid", () => {
  it("should create a WordGrid from a string", () => {
    const input = `
        XMAS
        SAMX
        MASX
    `;

    const expected = {
      content: [
        ["X", "M", "A", "S"],
        ["S", "A", "M", "X"],
        ["M", "A", "S", "X"],
      ],
      rows: 3,
      columns: 4,
    };
    expect(createWordGrid(input)).toEqual(expected);
  });
});
