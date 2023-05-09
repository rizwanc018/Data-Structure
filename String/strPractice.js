const commonPrefix = (strs) => {
    let out = []
    const sorted = strs.sort()
    if (strs[0][0] !== strs[strs.length - 1][0]) {
        return out.join("")
    }
    for (let i = 0; i < strs[0].length; i++) {
        console.log(strs[0][i] , '==' , strs[strs.length - 1][i])
        if (strs[0][i] == strs[strs.length - 1][i]) {
            out.push(strs[0][i])
            
        }
    }
    return out.join("")
}


let strs = ["flower","flower","flower"]
// strs = ["a"]
console.log(commonPrefix(strs));