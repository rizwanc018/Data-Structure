const BinarySearch = (arr, t) => {
    let s = 0
    let e = arr.length - 1
    while (s <= e) {
        let m = (Math.floor(s + (e - s) / 2))
        if (arr[m] < t) s = m + 1
        else if (arr[m] > t) e = m - 1
        else return m
    }
    return -1
}


let arr = [22, 23, 33, 45, 56, 66, 67, 78, 99]
let f = 22
console.log('Tarrrget position: ', BinarySearch(arr, f));


const BinaryRecursion = (arr, t) => {
    let s = 0
    let e = arr.length - 1
}

const recursionHelper = (arr, s, e, t) => {
    let m = Math.floor(s + (e - s) / 2)
    if (s > e) return -1
    else if (arr[m] < t) return recursionHelper(arr, m + 1, e, t)
    else if (arr[m] > t) return recursionHelper(arr, s, m - 1, t)
    else return m
}
