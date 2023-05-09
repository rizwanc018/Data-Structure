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
            return
        }
        this.tail.next = node
        this.tail = node
    }

    prepend(data) {
        const node = new Node(data)
        if (!this.head) {
            this.head = node
            this.tail = tail
            return
        }
        node.next = this.head
        this.head = node
    }

    delete(value) {
        let curr = this.head
        if (this.head.data === value) {
            this.head = curr.next
            curr.next = null
            return
        }
        while (curr.next) {
            if (curr.next.data === value) {
                curr.next = curr.next.next
                return
            }
            curr = curr.next
        }
    }

    insertBefore(pos, data) {
        const node = new Node(data)
        let curr = this.head
        if (this.head.data === pos) {
            node.next = this.head
            this.head = node
            return
        }
        while (curr.next) {
            if (curr.next.data === pos) {
                node.next = curr.next
                curr.next = node
                return
            }
            curr = curr.next
        }
    }

    insertAfter(pos, data) {
        const node = new Node(data)
        let curr = this.head
        while (curr) {
            if (curr.data == pos) {
                if (curr.next == null) {
                    curr.next = node
                    this.tail = node
                    return
                }
                node.next = curr.next
                curr.next = node
                return
            }
            curr = curr.next
        }
    }

    reverse() {
        let prev = null
        let curr = this.head
        let next = null
        while(curr) {
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        return prev
    }

    print() {
        let arr = []
        let curr = this.head
        while (curr) {
            arr.push(curr.data)
            curr = curr.next
        }
        console.log('List : ', arr.join('->'))
    }

}

const l = new LinkedList()
l.append('a')
l.append('b')
l.append('c')
l.append('d')
l.append('e')
l.print()
l.prepend('-a')
l.append('f')
l.delete('d')
l.insertAfter('a', 'aa')
l.insertBefore('c', 'bb')
console.log(l.reverse())
l.print()