function shiftToend(arr, num) {
    let i = 0
    let j = arr.length - 1
    while (i != j) {
        if (arr[i] === num && arr[j] != num) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++
            j--
        } else if (arr[i] === num && arr[j] === num) {
            j--
        } else {
            i++
        }
    }
}

let arr = [1, 4, 3, 5, 4, 6, 4, 7, 4, 8, 4]
shiftToend(arr, 4)
console.log(arr)