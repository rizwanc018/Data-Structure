const merge = (lArr, rArr) => {
    let newArr = []
    let li = 0
    let ri = 0
    while (li < lArr.length && ri < rArr.length) {
        if (lArr[li] < rArr[ri]) newArr.push(lArr[li++])
        else newArr.push(rArr[ri++])
    }
    while (li < lArr.length) newArr.push(lArr[li++])
    while (ri < rArr.length) newArr.push(rArr[ri++])
    return newArr
}

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    let m = Math.floor(arr.length / 2)
    let lArr = arr.slice(0, m)
    let rArr = arr.slice(m)
    return merge(mergeSort(lArr), mergeSort(rArr))
}

let arr = [234, 43, 55, 63, 5, 6, 235, 547, 33]
console.log(mergeSort(arr));