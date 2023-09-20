// class Queue {
//     constructor() {
//         this.items = [] 
//     }

//     enqueue(data) {
//         this.items.push(data)
//     }

//     dequeue() {
//         this.items.shift()
//     }
// }


class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Queue {
    constructor() {
        this.front = null
        this.rear = null
    }

    enqueue(data) {
        let node = new Node(data)

        if (!this.rear) {
            this.front = node
            this.head = node
        } else {
            this.rear.next = node
            this.rear = node
        }
    }

    dequeue() {
        if (!this.front) {
            return "Underfrlow"
        }
        let dequed = this.front
        this.front = this.front.next
        dequed.next = null
        return dequed.data
    }
}