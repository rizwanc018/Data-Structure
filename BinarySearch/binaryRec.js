function binarySearch(arr, t, ss, ee) {
    let s = ss
    let e = ee
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
let t = 46
let s = 0
let e = a.length - 1
console.log('Target position: ',binarySearch(a,t, s, e));

// function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
//     if (start > end) {
//       // The target element is not present in the array
//       return -1;
//     }
  
//     // Find the middle index of the array
//     const mid = Math.floor((start + end) / 2);
  
//     if (arr[mid] === target) {
//       // The target element is found at the middle index
//       return mid;
//     } else if (arr[mid] > target) {
//       // The target element is in the left half of the array
//       return binarySearchRecursive(arr, target, start, mid - 1);
//     } else {
//       // The target element is in the right half of the array
//       return binarySearchRecursive(arr, target, mid + 1, end);
//     }
//   }
  
//   // Example usage
//   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const target = 6;
//   const index = binarySearchRecursive(arr, target);
  
//   console.log(`Target ${target} is found at index ${index}`);
  