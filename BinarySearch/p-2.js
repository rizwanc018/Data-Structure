// const binarySearch = (arr, t) => {
//     let s = 0
//     let e = arr.length - 1
//     while (s <= e) {
//         let m = Math.floor(s + (e - s) / 2)
//         if (arr[m] === t) return m
//         else if (arr[m] < t) {
//             s = m + 1
//         } else {
//             e = m - 1
//         }
//     }
//     return -1
// }

// const binarySearchHelper = (arr, t, s, e) => {
//     if(s > e) return -1
//     let m = Math.floor(s + (e - s) / 2)
//     if (arr[m] === t) return m
//     else if (arr[m] < t) {
//         s = m + 1
//         return binarySearchHelper(arr, t, s, e)
//     } else {
//         e = m - 1
//         return binarySearchHelper(arr, t, s, e)
//     }
// }

// const binarySearchRecursion = (arr, t) => {
//     let s = 0
//     let e = arr.length - 1
//     return binarySearchHelper(arr, t, s, e)
// }

const binarySearch = (arr, t) => {
    let s = 0
    let e = arr.length - 1
    while (s <= e) {
        let m = Math.floor(s + (e - s) / 2)
        if (arr[m] === t) {
            return m
        } else if (arr[m] < t) {
            s = m + 1
        } else {
            e = m - 1
        }
    }
    return -1
}

const binarySearchHelper = (arr, t, s, e) => {
    if (s > e) return -1
    let m = Math.floor(s + (e - s) / 2)
    if (arr[m] === t) {
        return m
    } else if (arr[m] < t) {
        return binarySearchHelper(arr, t, m + 1, e)
    } else {
        return binarySearchHelper(arr, t, s, e - 1)
    }
}

const binarySearchRecursion = (arr, t) => {
    let s = 0
    let e = arr.length - 1

}

let a = [22, 23, 33, 45, 56, 66, 67, 78, 99]
let t = 66
console.log('Target position: ', binarySearch(a, t));