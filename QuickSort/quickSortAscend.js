const swap = (arr, s, e) => {
    let tmp = arr[s]
    arr[s] = arr[e]
    arr[e] = tmp
}

const partition = (arr, s, e) => {
    let pivot = arr[Math.floor((s + (e - s) / 2))]
    while (s <= e) {
        while (arr[s] < pivot) {
            s++
        }
        while (arr[e] > pivot) {
            e--
        }
        if (s <= e) {
            swap(arr, s, e)
            s++
            e--
        }
    }
    return s
}

const quickSort = (arr, l, r) => {
    let i
    if (arr.length > 1) {
        i = partition(arr, l, r)
        if (l < i - 1) quickSort(arr, l, i - 1)
        if (i < r) quickSort(arr, i, r)
    }
    return arr
}

let arr = [234, 43, 55, 63, 5, 6, 235, 547, 33]
console.log(quickSort(arr, 0, arr.length - 1));