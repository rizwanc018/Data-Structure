function binarySearch(arr, t, s, e) {
    if (s > e) return 'not found'
    let m = Math.floor(s + (e - s) / 2)
    if (arr[m] === t) {
        return m
    }
    else if (arr[m] < t) {
        s = m + 1
        return binarySearch(arr, t, s, e)
    } else if (arr[m] > t) {
        e = m - 1
        return binarySearch(arr, t, s, e)
    }
}

let a = [22,23,33,45,56,66,67,78,99]
let t = 45
let s = 0
let e = a.length - 1
console.log('Target position: ',binarySearch(a,t, s, e));