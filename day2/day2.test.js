const { one, two } = require("./day2.js");

const input = `
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
`

const input2 = `
`

test("day2", () => {
    expect(one(input)).toBe(2);
});

test("day2-2", () => {
    expect(two(input)).toBe(4);
});