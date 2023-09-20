const selectionSort = arr => {
    for(let i = 0; i < arr.length; i++) {
        let minI = i
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[i]) minI = j
        }
        [arr[i] ,arr[minI]] = [arr[minI], arr[i]]
    }
}

let arr = [234, 43, 55, 63, 5, 6, 235, 547, 33]
selectionSort(arr)
console.log(arr)
