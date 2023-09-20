const bubbleSort = arr => {
    for (let i in arr) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
}

let arr = [234, 43, 55, 63, 5, 6, 235, 547, 33]
console.log('Original array:', arr);
bubbleSort(arr)
console.log('Sorted array:', arr)