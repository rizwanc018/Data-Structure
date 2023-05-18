class Stack {
    constructor() {
        this.items = []
    }

    push(data) {
        this.items.push(data)
    }

    pop() {
        return this.items.pop()
    }

    size() {
        return this.items.length
    }

    display() {
        console.log(this.items.join('->'))
    }
}

let s = 'Hello'
let stk = new Stack()
for (const i in s) {
    stk.push(s[i])
}

let l = stk.size()
let r = ''
while (l > 0) {
    r += stk.pop()
    l--
}
console.log(r)