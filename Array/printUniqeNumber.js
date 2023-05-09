const printUnique = (arr) => {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            count++
        } else {
            if(count == 0) {
                return arr[i]
            }
            count = 0
        }
    }
}

let arr = [1,1,2,2,3,3,4,4,5]
console.log(printUnique(arr))