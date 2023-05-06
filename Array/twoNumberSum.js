function twoNumberSum(a, t) {
    const nums = new Set()
    nums.add(a[0])
    for (let i = 1; i < a.length; i++) {
        let match = t - a[i]
        if (nums.has(match)) {
            return [a[i], match]
        } else {
            nums.add(a[i])
        }
    }
}

let arr = [6,5,4,3,8,9,0]
console.log(twoNumberSum(arr, 10))