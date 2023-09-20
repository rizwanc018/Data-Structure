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
        if (!this.front) {
            this.front = node
            this.rear = node
        }else {
            this.rear.next = node
            this.rear = node
        }
    }

    dequeue(){
        if(!this.front) return null
        let tmp = this.front
        this.front = this.front.next
        tmp.next = null
        return tmp.data
    }
}