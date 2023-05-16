class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Linkedlist {
    constructor() {
        this.top = null
    }

    push(data) {
        const node = new Node(data)
        if (!this.top) {
            node.next = this.top
            this.top = node
        }
    }

    pop() {
        if (!this.top) {
            return false
        }
        let tmp = this.top.data
        this.top = this.top.next
        return tmp
    }

    isEmpty() {
        return this.top === null
    }
}

var isValid = function (s) {
    let stack = new Linkedlist
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
        else if (s[i] !== stack.pop()) {
            return false
        }
    }
    return stack.isEmpty()
}

let s = "()[]{}"
console.log(isValid(s))
s = "(}"
console.log(isValid(s))