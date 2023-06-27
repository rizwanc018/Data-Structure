class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(data) {
        const node = new Node(data)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
    }

    prepend(data) {
        const node = new Node(data)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
    }

    insertAfter(nextTo, data) {
        const node = new Node(data)
        if (this.tail.data == nextTo) {
            this.tail.next = node
            this.tail = node
            return
        }
        let curr = this.head
        while (curr !== null) {
            if (curr.data === nextTo) {
                node.next = curr.next
                curr.next = node
            }
            curr = curr.next
        }
    }
    delete(data) {
        let curr = this.head
        if(this.head.data === data) {
            this.head = head.next
            curr.next = null
            return
        }

        while(curr.next) {
            if(curr.next.data === data){
                let tmp = curr.next
                curr.next = curr.next.next
                tmp.next = null
                return
            }
        }
    }
    reverse() {
        if(!this.head) return

        let prev = null
        let curr = this.head
        let next = null

        while(curr) {
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    middle() {
        if(!this.head) return null
        let end = this.head
        let middle = this.head

        while(end !== null && end.next !== null) {
            middle = middle.next
            end = end.next.next
        }
        return middle
    }

    print() {
        if(!this.head) return

        let curr = this.head
        let res = []
        while(curr) {
            res.push(curr.data)
            curr = curr.next
        }
        console.log(res.join('->'));
    }
}

const list = new LinkedList()
list.append('a')
// list.append('b')
// list.append('b')
list.append('b')
// list.append('c')
list.append('c')
// list.append('d')
list.append('d')
list.print()
// list.printTail()
// list.insertNextTo('d', 'f')
console.log('Reversed')
list.reverse()
list.print()