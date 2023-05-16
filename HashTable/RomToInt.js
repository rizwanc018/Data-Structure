const romanToInt = (s) => {
    const mp = new Map()
    mp.set('I', 1)
    mp.set('V', 5)
    mp.set('X', 10)
    mp.set('L', 50)
    mp.set('C', 100)
    mp.set('D', 500)
    mp.set('M', 1000)

    let result = 0
    for(let i = 0; i < s.length; i++) {
        let cur = mp.get(s[i])
        let nxt = mp.get(s[i+1])
        console.log("🚀 ~ file: RomToInt.js:15 ~ romanToInt ~ nxt:", nxt)

        if(cur < nxt) {
            result += nxt - cur
            i++
        } else {
            result += cur
        }
    }
    return result
};

const  s = "LVIII"
console.log(romanToInt(s))