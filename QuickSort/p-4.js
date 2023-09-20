const quickSort = arr => {
    let s = 0
    let e = arr.length - 1

}

const helper = (arr, s, e) => {
    if (s < e) {
        i = partition(arr,s,e)
        quickSort(arr, s ,i-1)
        quickSort(arr,i , e)
    }
}

const partition = (arr, s, e) => {
    let pivot = arr[Math.floor(s + (e - s) / 2)]
    while (s < e) {
        while (arr[s] < pivot) s++
        while (arr[e] > pivot) e--
        if (s <= e) {
            [arr[s].arr[e]] = [arr[e], arr[s]]
        }
        return s
    }
}

let arr = [234, 43, 55, 63, 5, 6, 235, 547, 33]
// console.log(quickSort(arr, 0, arr.length - 1));
quickSort(arr)
console.log(arr)