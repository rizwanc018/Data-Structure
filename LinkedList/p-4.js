class Node{
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor() {
        this.head = null
    }

    append(data){
        let node = new Node(data)
        if(!this.head){
            this.head = node
        } else {
            let curr = this.head
            while(curr.next) curr = curr.next
            curr.next = node
        }
    }

    reverse(){
        let prev = null
        let curr = this.head
        let next = null

        while(curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    reverseRec(){
        this.reverseHelper(this.head, null)
    }

    reverseHelper(curr, prev) {
        if(!curr) {
            this.head = prev
        }

        let next = curr.next
        curr.next = prev
        this.reverseHelper(next, curr)
    }

    middle() {
        if(!this.head) return null
        let end = this.head
        let middle = this.head

        while(end !== null && end.next !== null) {
            end = end.next.next
            middle = middle.next
        }
        return middle
    }
}