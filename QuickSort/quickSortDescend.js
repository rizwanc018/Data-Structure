const swap = (arr, i, j) => {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

const partition = (arr, s, e) => {
    let pivot = arr[Math.floor((s + (e - s) / 2))]

    while (s <= e) {
        while (arr[s] > pivot) {
            s++
        }
        while (arr[e] < pivot) {
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

const quickSort = (arr, s, e) => {
    let i
    if (arr.length > 1) {
        i = partition(arr, s, e)
        if (s < i - 1) quickSort(arr, s, i - 1)
        if (e > i) quickSort(arr, i, e)
    }
    return arr
}

let arr = [234, 43, 55, 63, 5, 6, 235, 547, 33]
console.log(quickSort(arr, 0, arr.length - 1));