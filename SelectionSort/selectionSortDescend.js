const selectionSort = arr => {
    let i, j, mi, tmp
    for (i = 0; i < arr.length; i++) {
        mx = i
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[mx]) {
                mx = j
            }
        }
        tmp = arr[i]
        arr[i] = arr[mx]
        arr[mx] = tmp
    }

    return arr
}

let arr = [234, 43, 55, 63, 5, 6, 235, 547, 33]
console.log(selectionSort(arr));