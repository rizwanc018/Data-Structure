let a = [2, 3, 4, 2, 4, 6, 7, 3]
let l = a.length

// for (i = 0; i < l; i+=2) {
//     if(a[i] != a[i+1]){
//         console.log(a[i])
//     }
// }
let count = 0
for(i = 0; i < l; i++) {
    for( j = i+1; j < l;j++) {
        if(a[i] == a[j]){
            count++
        }
    }
    if(count == 0){
        console.log(a[i])
        return
    }
    count = 0
}

// input = "hello"
// output = "ohell"

// let s = "hello"
// s = s.split('')
// let l = s.pop()
// s.unshift(l)
// console.log(s.join(''))