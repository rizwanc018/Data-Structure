const partition = (arr, s, e) => {
    let pivot = arr[Math.floor(s + (e - s) / 2)]
    while (s < e) {
        while(arr[s] < pivot) s++
        while(arr[e] > pivot) e--
        if(s <= e) {
            [arr[s], arr[e]] = [arr[e], arr[s]]
            s++
            e--
        }
        return s
    }
}

const quickSort = (arr, s, e) => {
    if (s < e) {
        let i = partition(arr, s, e)
        quickSort(arr, s, i - 1)
        quickSort(arr, i, e)
    }
}

let arr = [234, 43, 55, 63, 5, 6, 235, 547, 33]
// console.log(quickSort(arr, 0, arr.length - 1));
quickSort(arr, 0, arr.length - 1)

console.log(arr)