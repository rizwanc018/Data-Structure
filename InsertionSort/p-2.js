// const insertionSort = arr => {
//     for (let i = 1; i < arr.length; i++) {
//         let curr = arr[i]
//         j = i - 1
//         while(j >=0 && curr < arr[j]) {
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = curr
//     }
// }

const insertionSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i]
        let j = i - 1
        while(j >= 0 && curr < arr[j]) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = curr
    }
}

let arr = [234, 43, 55, 63, 5, 6, 235, 547, 33]
insertionSort(arr)
console.log(arr)
