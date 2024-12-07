const { day1 } = require("./day1.js");

const input = `
3   4
4   3
2   5
1   3
3   9
3   3
`

test("day1", () => {
    expect(day1(input)).toBe(11);
});

