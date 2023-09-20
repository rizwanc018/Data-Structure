const bubbleSort = arr => {
    let l = arr.length
    for (let i = 0; i < l; i++) {
       let swapped = false
        for (let j = 0; j < l - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swapped = true
            }
        }
        if(!swapped) break
    }
}

// const arr = [64, 34, 25, 12, 22, 11, 90];
const arr = [1,3,2,4,5,6] 
console.log('Original array:', arr);
bubbleSort(arr)
console.log('Sorted array:', arr);