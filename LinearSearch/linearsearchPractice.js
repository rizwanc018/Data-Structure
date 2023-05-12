const power = (arr) => {
    let res = []
    let powered = 1
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 2) {
            if (count == 0) {
                count++
                res.push(powered)
            } else {
                powered = powered * 2
                res.push(powered)
            }
        }
    }
    return res
}

console.log(power([1,2,4,3,2,3,2]))