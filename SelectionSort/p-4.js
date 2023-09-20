const selectionSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        let minI = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minI] > arr[j]) minI = j
        }
        [arr[minI], arr[i]] = [arr[i], arr[minI]]
    }
}

let arr = [234, 43, 55, 63, 5, 6, 235, 547, 33]
selectionSort(arr)
console.log(arr)
