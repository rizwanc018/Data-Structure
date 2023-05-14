const isValid = (s) => {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '[') {
            stack.push(']')
        }
        else if (s[i] == '{') {
            stack.push('}')
        }
        else if (s[i] == '(') {
            stack.push(')')
        }
        else if(s[i] !== stack.pop()) {
            return false
        }
    }
    return !stack.length
}