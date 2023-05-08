function binarySearch(arr, t) {
    let s = 0
    let e = arr.length - 1
    while(s <= e) {
        let m = Math.floor(s + (e - s)/2)
        if(arr[m] === t) return m
        if(arr[m] < t) {
            s = m+1
        } else if(arr[m] > t) {
            e = m - 1
        }
    }
    return "not found"
}

let a = [22,23,33,45,56,66,67,78,99]
let t = 46
console.log('Target position: ',binarySearch(a,t));