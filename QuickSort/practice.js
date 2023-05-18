// const partition = (arr, s, e) => {
// let pivot = arr[Math.floor(s + (e - s) / 2)]
//     while (s <= e) {
//         while (arr[s] < pivot) {
//             s++
//         }
//         while (arr[e] > pivot) {
//             e--
//         }
//         if (s <= e) {
//             [arr[s], arr[e]] = [arr[e], arr[s]]
//             s++
//             e--
//         }
//     }
//     return s
// }

// const qsa = (arr, l, r) => {
//     if (l < r) {
//         const i = partition(arr, l, r)
//         qsa(arr, l, i - 1)
//         qsa(arr, i, r)
//     }
//     return arr
// }

const partition = (arr, s, e) => {
    let pivot = arr[Math.floor(s + (e - s) / 2)]
    while (s <= e) {
        while (arr[s] < pivot) s++
        while (arr[e] > pivot) e--
        if (s <= e) {
            [arr[s], arr[e]] = [arr[e], arr[s]]
            s++
            e--
        }
    }
    return s
}

const qsa = (arr, s, e) => {
    if (s < e) {
        const i = partition(arr, s, e)
        qsa(arr, s, i - 1)
        qsa(arr, i, e)
    } return arr
}

let arr = [234, 43, 55, 63, 5, 6, 235, 547, 33]
console.log(qsa(arr, 0, arr.length - 1));