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
        if (this.head) {
            this.tail.next = node
            this.tail = node
        } else {
            this.head = node
            this.tail = node
        }
    }

    prepend(data) {
        const node = new Node(data)
        if (this.head) {
            node.next = this.head
            this.head = node
        } else {
            this.head = node
            this.tail = node
        }
    }

    insertAfter(after, data) {
        const node = new Node(data)
        if (this.tail.data === after) {
            this.tail.next = node
            this.tail = node
        }
        let curr = this.head
        while (curr !== null) {
            if (curr.data === after) {
                node.next = curr.next
                curr.next = node
                break
            } else {
                curr = curr.next
            }
        }
    }

    delete(data) {
        let curr = this.head
        if (curr.data === data) {
            this.head = curr.next
        } else {
            while (curr.next) {
                if (curr.next.data === data) {
                    curr.next = curr.next.next
                }
                curr = curr.next
            }
        }
    }

    print() {
        if (!this.head) return

        let cur = this.head
        let ll = []

        while (cur) {
            ll.push(cur.data)
            cur = cur.next
        }

        console.log(ll.join('->'))
    }

    reverse(){
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

    // reverseHelper(curr, prev) {
    //     if (!curr) {
    //         this.head = prev
    //         return
    //     }

    //     let next = curr.next
    //     curr.next = prev
    //     this.reverseHelper(next, curr)
    // }

    // reverseRecursively() {
    //     this.reverseHelper(this.head, null)
    // }
    reverseHelper(curr, prev) {
        if(!curr){
            this.head = prev
            return
        }

        let next = curr.next
        curr.next = prev
        this.reverseHelper(next, curr)
    }

    reverseRecursively() {
        this.reverseHelper(this.head, null)
    }


    middle() {
        if (!this.head) return null
        let middle = this.head
        let end = this.head

        while (end !== null && end.next !== null) {
            end = end.next.next
            middle = middle.next
        }

        return middle.data
    }
}

const list = new LinkedList()
list.append('a')
// list.append('b')
list.append('b')
// list.append('b')
// list.append('c')
// list.append('c')
// list.append('d')
list.append('d')
// list.print()
// list.insertAfter('b', 'c')
// list.print()
// list.delete('c')
// list.prepend('-a')
list.reverse()
list.print()
list.reverseRecursively()
list.print()
// console.log(list.middle())