// const binaryIt = (arr, t) => {
//     let s = 0
//     let e = arr.length - 1
//     while (s <= e) {
//         m = Math.floor(s + (e - s) / 2)
//         if (arr[m] == t) return m
//         if (arr[m] > t) {
//             e = m - 1
//         } else {
//             s = m + 1
//         }
//     }
//     return -1
// }

// const binarySearch = (arr, t) => {
//     let s = 0
//     let e = arr.length - 1
//     while (s <= e) {
//         let m = Math.floor(s + (e - s) / 2)
//         if (arr[m] == t) return m
//         if (arr[m] > t) e = m - 1
//         else s = m + 1
//     }
//     return -1
// }


// const binaryRec = (arr, t, s, e) => {
//     if (s > e) return -1
//     let m = Math.floor(s + (e - s) / 2)
//     if (arr[m] == t) return m
//     if (arr[m] > t) {
//         e = m - 1
//         return binaryRec(arr, t, s, e)
//     } else if (arr[m] < t) {
//         s = m + 1
//         return binaryRec(arr, t, s, e)
//     }
// }

const binarySearch = (arr, t, s, e) => {
    if (s > e) return -1
    let m = Math.floor(s + (e - s) / 2)
    if(arr[m] == t) return m
    if(arr[m] > t) return binarySearch(arr, t, s, m-1)
    else return binarySearch(arr, t, m+1, e)
}



let a = [22, 23, 33, 45, 56, 66, 67, 78, 99]
let t = 45
let s = 0
let e = a.length - 1
// console.log('Target position: ', binarySearch(a, t));
console.log('Target position: ', binarySearch(a, t, s, e));
