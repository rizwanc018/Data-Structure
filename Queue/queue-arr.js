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

    display() {
        console.log(this.items.toString())
    }
}


const queue = new Queue();

queue.enqueue("John")
queue.enqueue("Jane")
queue.enqueue("Bob")
queue.enqueue("Mark")
queue.display()
console.log()

queue.dequeue()
console.log(queue.front())
console.log(queue.rear())