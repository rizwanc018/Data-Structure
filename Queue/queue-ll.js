class Node{
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Queue{
    constructor() {
        this.front = null
        this.rear = null
    }

    enqueue(data){
        const node = new Node(data)
        if(!this.rear) {
            this.front = node
            this.rear = node
        } else {
            this.rear.next = node
            this.rear = node
        }
    }

    dequeue() {
        if(!this.front) {
            return "Underflow"
        }

        let dequed = this.front
        this.front = this.front.next

        // if front reached to end  or front is null
        // after dequeing 
        if(!this.front){
            this.rear = null
        }

        return dequed
    }

    display() {
        let curr = this.front
        let q = []
        while(curr) {
            q.push(curr.data)
            curr = curr.next
        }
        console.log(q.join(' < '));

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
queue.enqueue("Kyle")
queue.display()
