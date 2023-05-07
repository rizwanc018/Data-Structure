function change(str, k) {
    const key = k % 26
    let cipher = ''
    for (let i = 0; i < str.length; i++) {
        let charCode = str[i].charCodeAt(0) + k
        if (charCode > 122) {
            charCode = 96 + charCode % 122
        }
        cipher += String.fromCharCode(charCode)
    }

    console.log(cipher)
}

change('hai how are you', 2)