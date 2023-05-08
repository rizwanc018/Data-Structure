const linearSearch = (arr, t) => {
    let l = arr.length
    // for (let i = 0; i < l; i++) {
    //     if(arr[i] === t) return i
    // }
    let i = 0
    while ( i < l) {
        if (arr[i] === t) return i
        i++
    }
    return -1
}

const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(linearSearch(arr, 5))