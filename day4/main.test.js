const { one, two } = require("./main.js");
// const fs = require('fs');
// const path = require('path');

// function readInput() {
//     return fs.readFileSync(path.join(__dirname, 'data'), 'utf8').trim();
// }

// const input = `
// MMMSXXMASM
// MSAMXMSMSA
// AMXSXMAAMM
// MSAMASMSMX
// XMASAMXAMM
// XXAMMXXAMA
// SMSMSASXSS
// SAXAMASAAA
// MAMMMXMMMM
// MXMXAXMASX`

const input = `
ABC
BBB
CCC`

test("1", () => {
    expect(one(input, 'XMAS')).toBe(3);
});

// test("2", () => {
//     expect(two(input2)).toBe(48);
// });