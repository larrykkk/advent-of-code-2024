function day1 (input) {
    let result = 0;
    console.log(input);

    const lines = input.split("\n").filter(line => line.trim() !== "");
    let list1 = [];
    let list2 = [];
    console.log({lines});

    for (const line of lines) {
        const [a, b] = line.split(/\s+/);

        // 將 a 用於小到大的排序方式, 插入 list1 合適的位置
        let index = list1.findIndex(item => item > a);
        if (index === -1) {
            list1.push(a);
        } else {
            list1.splice(index, 0, a);
        }
        // 將 b 用於小到大的排序方式, 插入 list2 合適的位置
        let index2 = list2.findIndex(item => item > b);
        if (index2 === -1) {
            list2.push(b);
        } else {
            list2.splice(index2, 0, b);
        }
    }

    console.log(list1);
    console.log(list2);
    
    // 使用 loop 將 list1 和 list2 的最小值做 diff 絕對值計算後加總道 result
    for (let i = 0; i < list1.length; i++) {
        result += Math.abs(list1[i] - list2[i]);
    }

    return result;
}

module.exports = { day1 };