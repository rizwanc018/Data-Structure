class Node{
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Linkedlist{
    constructor() {
        this.head = null
    }

    push(data) {
        let node = new Node(data)
        if(!this.head) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
    }

    pop() {
        let tmp = this.head
        this.head = this.head.next
        tmp.next = null
    }
}