function one (input, targetString) {
    let count = 0
    let scandString = ''

    const isMatchXMAS = (v) => targetString.startsWith(v);

    const updateScandString = (v) => {
        scandString += v
        if (scandString === targetString) {
            count ++
            console.log(`count: ${count}`)
            resetScandString()
        }
    }

    const resetScandString = () => {
        scandString = ''
    }

    // console.log(input)
    // convert to string of array
    // like
    // [
    // 'MMMSXXMASM',
    // 'MSAMXMSMSA',
    // ]
    input = input.split('\n').filter(x => x)

    // left to right scan
    console.log(`left to right scan start`)
    input.forEach((line, inputIndex) => {
        resetScandString()
        // console.log({line})
        var lineArray = line.split('')
        lineArray.forEach((x, lineIndex) => {
            var preview = scandString + x
            if (isMatchXMAS(preview)) {
                console.log({
                    scandString,
                    inputIndex,
                    lineIndex,
                    value: x
                })
                updateScandString(x)
            } else {
                resetScandString()
                updateScandString(x)
            }
        })
    })

    console.log(`right to left scan start`)
    // right to left scan
    input.forEach((line, inputIndex) => {
        resetScandString()
        // console.log({ line: line.split('').reverse()})
        var lineArray = line.split('').reverse()
        lineArray.forEach((x, lineIndex) => {
            var preview = scandString + x
            if (isMatchXMAS(preview)) {
                console.log({
                    scandString,
                    inputIndex,
                    lineIndex,
                    value: x
                })
                updateScandString(x)
            } else {
                resetScandString()
                updateScandString(x)
            }
        })
    })

    // top to bottom scan
    input[0].split('').forEach((x, lineIndex) => {
        resetScandString()
        input.forEach((line, inputIndex) => {
            var newValue = line[lineIndex]
            var preview = scandString + newValue

            if (isMatchXMAS(preview)) {
                console.log({
                    scandString,
                    inputIndex,
                    lineIndex,
                    value: x
                })
                updateScandString(newValue)
            } else {
                resetScandString()
                updateScandString(newValue)
            }
        })
    })

    // bottom to top scan
    input[0].split('').forEach((x, lineIndex) => {
        resetScandString()
        input.slice().reverse().forEach((line, inputIndex) => {
            var newValue = line[lineIndex]
            var preview = scandString + newValue

            if (isMatchXMAS(preview)) {
                console.log({
                    scandString,
                    inputIndex,
                    lineIndex,
                    value: x
                })
                updateScandString(newValue)
            } else {
                resetScandString()
                updateScandString(newValue)
            }
        })
    })

    // 左上到右下掃描
    const scanLTtoRB = () => {
        // resetScandString()
        let startX = 0
        let startY = 0
        let xMax = input[0].length - 1
        let yMax = input.length - 1
    
        var LTtoRBStartPotinList = []
        while (startX <= xMax) {
            LTtoRBStartPotinList.push([startX, startY])
            startX ++
        }
    
        startX = 0
        startY = 1
        while (startY <= yMax) {
            LTtoRBStartPotinList.push([startX, startY])
            startY ++
        }
    
        // console.log(`LTtoRBStartPotinList is`)
        // console.log(LTtoRBStartPotinList)
    
        console.log(`左上到右下掃描`)
    
        LTtoRBStartPotinList.forEach(([x, y]) => {
            resetScandString()
            while (x < xMax && y < yMax) {
            
                var newValue = input[y][x]
                var preview = scandString + newValue
                
                if (isMatchXMAS(preview)) {
                    console.log({
                        scandString,
                        value: newValue,
                        x,
                        y
                    })
                    updateScandString(newValue)
                } else {
                    resetScandString()
                    updateScandString(newValue)
                }
        
                x++
                y++
            }
        })

    }

    scanLTtoRB()

    // 右下到左上掃描
    // const scanRBtoLT = () => {
    //     console.log(`右下到左上掃描`)
    //     startX = input[0].length - 1
    //     startY = input.length - 1
    
    //     var RBtoLTPointList = []
    
    //     while (startX >= 0) {
    //         RBtoLTPointList.push([startX, startY])
    //         startX --
    //     }
    
    //     startX = input[0].length - 1
    //     startY = input.length - 1 - 1
    
    //     while (startY >= 0) {
    //         RBtoLTPointList.push([startX, startY])
    //         startY --
    //     }
    
    //     console.log('RBtoLTPointList is ')
    //     console.log(RBtoLTPointList)
    //     // resetScandString()
    
    //     RBtoLTPointList.forEach(([x, y]) => {
    //         resetScandString()
    //         console.log({ scandString })
    //         while (x >= 0 && y >= 0) {
    //             var newValue = input[y][x]
    //             var preview = scandString + newValue
                
    //             if (isMatchXMAS(preview)) {
    //                 console.log({
    //                     scandString,
    //                     value: newValue,
    //                     x,
    //                     y
    //                 })
    //                 updateScandString(newValue)
    //             } else {
    //                 resetScandString()
    //                 updateScandString(newValue)
    //                 if (isMatchXMAS(scandString)) {
    //                     console.log({
    //                         scandString,
    //                         value: newValue,
    //                         x,
    //                         y
    //                     })
    //                 }
    //             }
    
    //             x--
    //             y--
    //         }
    //     })
    // }

    // scanRBtoLT()

    // 左下到右上掃描
    const scanlbtort = () => {
        let startX = 0
        let startY = input.length - 1
        // let xMax = input[0].length - 1
        // let yMax = input.length - 1
        let pointList = []

        while (startX <= input[0].length - 1) {
            pointList.push([startX, startY])
            startX ++
        }

        startX = 0
        startY = input.length - 1 - 1
        while (startY >= 0) {
            pointList.push([startX, startY])
            startY--
        }

        // console.log({pointList})

        pointList.forEach(([x, y]) => {
            resetScandString()
            while (x < input[0].length - 1 && y >= 0) {
            
                var newValue = input[y][x]
                var preview = scandString + newValue
                
                if (isMatchXMAS(preview)) {
                    console.log({
                        scandString,
                        value: newValue,
                        x,
                        y
                    })
                    updateScandString(newValue)
                } else {
                    resetScandString()
                    updateScandString(newValue)
                }
        
                x++
                y--
            }
        })

    }
    scanlbtort()


    input = input.map(x=>x.split('').reverse().join('')).reverse()
    // console.log({input})

    // 左下到右上掃描
    scanLTtoRB()
    

    // 右上到左下掃描
    // scanRBtoLT()
    scanlbtort()


    

    // console.log(input)
    console.log({count})
    console.log({input})
    return count
}

function two (input) {
}

module.exports = { one, two };

