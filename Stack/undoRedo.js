class Stack {
    constructor() {
        this.pr = []
        this.sec = []
    }

    push(data) {
        this.pr.push(data)
    }

    pop() {
        return this.pr.pop()
    }

    size() {
        return this.pr.length
    }

    display() {
        console.log(this.pr.join('->'))
    }

    undo() {
        this.sec.push(this.pr.pop())
    }

    redo() {
        this.pr.push(this.sec.pop())
    }
}

let s = new Stack()
s.push('H')
s.push('e')
s.push('l')
s.push('l')
s.push('o')
s.display()
s.undo()
s.display()
s.redo()
s.display()
