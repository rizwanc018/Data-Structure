const selectionSort = arr => {
    let i, j, mi, tmp
    for (i = 0; i < arr.length; i++) {
        mi = i
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[mi]) {
                mi = j
            }
        }
        tmp = arr[i]
        arr[i] = arr[mi]
        arr[mi] = tmp
    }
    return arr
}



let arr = [234, 43, 55, 63, 5, 6, 235, 547, 33]
console.log(selectionSort(arr));