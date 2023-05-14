const merge = (lArr, rArr) => {
    let sArr = [],
        li = 0,
        ri = 0;

    while (li < lArr.length && ri < rArr.length) {
        if (lArr[li] < rArr[ri]) {
            sArr.push(lArr[li++])
        } else {
            sArr.push(rArr[ri++])
        }
    }

    while (li < lArr.length) {
        sArr.push(lArr[li++])
    }
    while (ri < rArr.length) {
        sArr.push(rArr[ri++])
    }
    return sArr
}

const mergeSort = arr => {
    if (arr.length <= 1) return arr

    let m = Math.floor(arr.length / 2)
    let lArr = arr.slice(0, m)
    let rArr = arr.slice(m)
    return merge(mergeSort(lArr), mergeSort(rArr))
}

let arr = [234, 43, 55, 63, 5, 6, 235, 547, 33]
console.log(mergeSort(arr));