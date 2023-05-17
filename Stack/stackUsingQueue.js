class Queue {
    constructor() {
        this.items = []
    }

    enqueue(data) {
        this.items.push(data)
    }

    isEmpty() {
        return this.items.length === 0
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow"
        }
        return this.items.shift()
    }

    front() {
        if (this.isEmpty()) {
            return "Underflow"
        }
        return this.items[0]
    }

    rear() {
        if (this.isEmpty()) {
            return "Underflow"
        }
        return this.items[this.items.length - 1]
    }

    size() {
        return this.items.length
    }

    display() {
        console.log(this.items.toString())
    }
}


class MyStack {
    constructor() {
        this.q = new Queue();
    }
    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.q.enqueue(x);
    }
    /**
     * @return {number}
     */
    pop() {
        let i = this.q.size()
        while (i > 1) {
            this.q.enqueue(this.q.dequeue());
            i--
        }
        return this.q.dequeue();
    }
    /**
     * @return {number}
     */
    top() {
        return this.q.rear();
    }
    /**
     * @return {boolean}
     */
    empty() {
        return this.q.isEmpty();
    }
}






var obj = new MyStack()
obj.push('x')
obj.push('y')
console.log(obj.pop())
console.log(obj.top())
console.log(obj.empty())

