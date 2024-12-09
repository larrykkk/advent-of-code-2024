
function one (input) {
    // mul(x,y)
    let result = 0
    // const text = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
    const text = input
    const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;

    // 使用 matchAll 提取所有匹配結果
    const matches = [...text.matchAll(regex)];

    // 打印匹配的完整字串和捕捉到的 x 和 y
    matches.forEach(match => {
        // console.log(`Matched: ${match[0]}, x: ${match[1]}, y: ${match[2]}`);
        result = result + match[1] * match[2]
    });

    return result
}

function two (input) {
    let result = 0
    const regex = /mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don't\(\)/g;

    const matches = [...input.matchAll(regex)];

    let isCounting = true
    matches.forEach(match => {
        // console.log(`Matched: ${match[0]}, x: ${match[1]}, y: ${match[2]}`);
        // console.log({match})

        if (match[0] === 'do()') {
            isCounting = true
        }
        if (match[0] === `don't()`) {
            isCounting = false
        }

        if (isCounting && match[1] && match[2]) {
            result = result + match[1] * match[2]
        }
    });

    return result
}

module.exports = { one, two };

