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

        // while(curr.next) {
        //     curr = curr.next
        // }
        // curr.next = node

    }

    removeDuplicate() {
        let curr = this.head
        while (curr) {
            let next = curr.next
            while (next !== null && curr.data === next.data) {
                next = next.next
            }
            curr.next = next
            curr = next
            if (curr === this.tail) {
                this.tail = curr
            }
        }
    }


    // removeDuplicate() {
    //     let curr = this.head
    //     while (curr !== null) {
    //         let nxt = curr.next
    //         while (nxt !== null && curr.data === nxt.data) {
    //             nxt = nxt.next
    //         }
    //         curr.next = nxt
    //         curr = nxt
    //         if (nxt === this.tail) {
    //             this.tail = curr
    //         }
    //     }
    // }

    print() {
        let ll = []
        let curr = this.head
        while (curr) {
            ll.push(curr.data)
            curr = curr.next
        }
        console.log(ll.join('->'))
    }
}

const list = new LinkedList()
list.append('a')
list.append('b')
list.append('b')
list.append('b')
list.append('c')
list.append('c')
list.append('d')
list.append('d')
list.print()
list.removeDuplicate()
list.print()