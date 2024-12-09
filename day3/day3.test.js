const { one, two } = require("./day3.js");
const fs = require('fs');
const path = require('path');

function readInput() {
    return fs.readFileSync(path.join(__dirname, 'data'), 'utf8').trim();
}

const input = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`
// const input1 = readInput()

const input2 = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`
// const input2 = fs.readFileSync(path.join(__dirname, 'data2'), 'utf8').trim();

test("1", () => {
    expect(one(input)).toBe(161);
});

test("2", () => {
    expect(two(input2)).toBe(48);
});