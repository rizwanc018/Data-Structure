class Node{
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    insert(data) {
        const node = new Node(data)
        if(!this.head) this.head = node
        else {
            let curr = this.head
            while(curr.next) curr = curr.next
            curr.next = node
        }
    }

    reverse() {
        let prev = null
        let curr = this.root
        let next = null
        while(curr) {
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    reverseRec() {
        this.recursionHelper(this.head, null)
    }

    recursionHelper(curr, prev){
        if(!curr) {
            this.head = prev
        }

        let next = curr.next
        curr.next = prev
        this.recursionHelper(next, curr)
    }

}