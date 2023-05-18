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

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }
}

class Queue {
    constructor() {
        this.stack = new Stack()
        this.sec = new Stack()
    }

    enqueue(data) {
        this.stack.push(data)
    }

    dequeue() {
        if (!this.stack.isEmpty()) {
            while (this.stack.size() > 0) {
                this.sec.push(this.stack.pop())
            }
            let popped = this.sec.pop()

            while (this.sec.size() > 0) {
                this.stack.push(this.sec.pop())
            }
            return popped
        }
        return null
    }

    display() {
        console.log(this.stack)
    }
}

let q = new Queue()
q.enqueue('a')
q.enqueue('b')
q.enqueue('c')

q.dequeue()
q.display()
q.dequeue()
q.dequeue()
q.display()

