const min = 1
const max = 3

function isDiffcorrect (r) {
    return r >= min && r <= max
}

function formatInput (input) {
    return input.split("\n").filter(line => line.trim() !== "").map(item => item.split(' ').map(Number));
}


function one (input) {
    let result = 0;
    let data = formatInput(input)

    // 檢查每個數組
    data.forEach(arr => {
        let isValid = true;
        let isIncreasing = arr[1] > arr[0];  // 確定是遞增還是遞減

        // 檢查相鄰數字
        for (let i = 0; i < arr.length - 1; i++) {
            let diff = Math.abs(arr[i + 1] - arr[i]);
            
            // 檢查差值是否在1-3之間
            if (diff < 1 || diff > 3) {
                isValid = false;
                break;
            }
            
            // 檢查是否保持遞增或遞減
            if ((isIncreasing && arr[i + 1] <= arr[i]) || 
                (!isIncreasing && arr[i + 1] >= arr[i])) {
                isValid = false;
                break;
            }
        }
        
        if (isValid) result++;
    });

    return result;
}

function two (input) {
    let data = formatInput(input)
    // console.log(data)
    return data.filter((row) => isRowSafe(row) || removeOneitem(row).some(isRowSafe)).length
}

const isRowSafe = (row) => {
    // console.log(row)
    return incSafe(row) || descSafe(row)
}

function incSafe (row) {
    return descSafe([...row].reverse())
}

function descSafe (row) {
    for (let i = 0; i < row.length - 1; i++) {
        const diff = row[i] - row[i + 1]
        // console.log(diff)
        // console.log(isDiffcorrect(diff))
        if (isDiffcorrect(diff) === false) return false
    }

    return true
}

function removeOneitem(row) {
    // row = [1,3,2,4,5]
    // return row.map()

    // return [3,2,4,5]
    // return [1,2,3,5]
    // return [1,3,4,5]
    // return [1,3,2,5]
    // return [1,3,2,4]

    return row.map((x, index) => {
        var temp = [...row]
        temp.splice(index, 1)
        return temp
    })
}

module.exports = { one, two };