// const selectionSort = arr => {
//     for (let i = 0; i < arr.length; i++) {
//         let mi = i
//         for (j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[mi]) mi = j
//         }
//         [arr[i], arr[mi]] = [arr[mi], arr[i]]
//     }
// }

const selectionSort = arr => {
    for(let i = 0; i < arr.length; i++ ) {
        let mi = i
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[mi]) mi = j
        }

        [arr[i], arr[mi]] = [arr[mi], arr[i]]
    }
}

let arr = [234, 43, 55, 63, 5, 6, 235, 547, 33]
selectionSort(arr)
console.log(arr)
