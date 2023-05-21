const heapSort = arr => {
    let len = arr.length
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        heapify(arr, len, i)
    }

    for (let i = len - 1; i > 0; i--) {
        [arr[i], arr[0]] = [arr[0], arr[i]];
        heapify(arr, i, 0)
    }
}

const heapify = (arr, n, i) =>  {
    let s = i
    const l = 2 * i + 1
    const r = 2 * i + 2
    if (l < n && arr[l] < arr[s]) s = l
    if (r < n && arr[r] < arr[s]) s = r
    if (s !== i) {
        [arr[i], arr[s]] = [arr[s], arr[i]];
        heapify(arr, n, s)
    }
}

let a = [8, 6, 2]
heapSort(a)
console.log(a)
