const isPalindrome = (str) => {
    str = str.toUpperCase()
    str = str.replace(/[^A-Z0-9]/gi, '')
    // revStr = str.split('').reverse().join('')
    // return revStr === str
    let s = 0
    let e = str.length - 1
    while(s < e) {
        if (str[s] !== str[e]) {
            return false
        }
        s++
        e--
    }
    return true
}

console.log(isPalindrome("Malayi, ala'm"));