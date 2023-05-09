class Node {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}


class DoubleLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    prepend(data) {
        const node = new Node(data)
        if (!this.head) {
            this.head = node
            this.tail = node
            return
        }
        node.next = this.head
        this.head.prev = node
        this.head = node
    }

    append(data) {
        const node = new Node(data)
        if (!this.head) {
            this.head = node
            this.tail = node
            return
        }
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
    }

    insertBefore(pos, data) {
        if (this.head.data == pos) {
            this.prepend(data)
            return
        }
        let curr = this.head.next
        const node = new Node(data)
        while (curr) {
            if (curr.data == pos) {
                node.next = curr
                node.prev = curr.prev
                curr.prev.next = node
                curr.prev = node
            }
            curr = curr.next
        }

    }

    insertAfter(pos, data) {
        if (this.tail.data == pos) {
            this.append(data)
            return
        }
        let curr = this.head.next
        const node = new Node(data)
        while (curr) {
            if (curr.data == pos) {
                node.next = curr.next
                curr.next.prev = node
                curr.next = node
                node.prev = curr
                return
            }
            curr = curr.next
        }
    }

    delete(data) {
        let curr = this.head
        while (curr) {
            if (curr.data == data) {
                if (curr.next == null) {
                    this.tail = curr.prev
                    curr.prev = null
                    return
                }
                if (curr.prev == null) {
                    this.head = curr.next
                    curr.next = null
                    return
                }
                curr.prev.next = curr.next
                curr.next.prev = curr.prev
                curr.next = null
                curr.prev = null
            }
        }
    }

    print() {
        if (!this.head) {
            return
        }
        let tmp = this.head
        let res = []
        while (tmp) {
            res.push(tmp.data)
            tmp = tmp.next
        }
        console.log(res.join(' <=> '));
    }

    printRev() {
        let curr = this.tail
        let res = []
        while (curr) {
            res.push(curr.data)
            curr = curr.prev
        }
        console.log(res.join(' <=> '));
    }
}

const dList = new DoubleLinkedList()
dList.append('a')
dList.append('b')
dList.append('e')
dList.append('f')
dList.append('g')
dList.append('h')
dList.print()
// dList.prepend('-a')
// dList.print()

// dList.delete('-a')

dList.insertBefore('b', 'aa' )
dList.print()

dList.insertAfter('b', 'bb')
dList.print()

dList.printRev()
