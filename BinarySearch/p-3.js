const binarySearch = (arr, t) => {
    let s = 0
    let e = arr.length - 1
    while (s <= e) {
        let m = Math.floor(s + (e - s) / 2)
        if (arr[m] < t) s = m + 1
        else if (arr[m] > t) e = m - 1
        else return m
    }
    return -1
}

let a = [22, 23, 33, 45, 56, 66, 67, 78, 99]
let t = 56
console.log('Target position: ', binarySearch(a, t));

/////////////////////////////////////////////////////////////////////////
const recHelper = (arr, t, s, e) => {
    if (s > e) return -1
    let m = Math.floor(s + (e - s) / 2)
    if (arr[m] < t) return recHelper(arr, t, m + 1, e)
    else if (arr[m] > t) return recHelper(arr, t, s, m - 1)
else return m
}

const binarySearchRec = (arr, t) => {
    let s = 0
    let e = arr.length - 1
}

let arr = [22, 23, 33, 45, 56, 66, 67, 78, 99]
let f = 5
console.log('Tarrrget position: ', binarySearch(arr, f));
