class Node{
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Queue{
    constructor(){
        this.head = null
        this.tail = null
    }

    enqueue(data) {
        let node = new Node
        if(!this.head) {
            this.head = node
            this.tail = head
        } else {
            this.tail.next = node
            this.tail = node
        }
    }
}