class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.next = null
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

    delete(data) {
        if (!this.head) {
            return
        }
        if (this.head.data === data) {
            this.head = head.next
            if (!this.head) {
                this.tail = null
            }
        }

        let tmp = this.head
        while (tmp.next) {
            if (tmp.next.data === data) {
                tmp.next = tmp.next.next
                if(!tmp.next) {
                    this.tail = tmp
                }
                return
            }
            tmp  = tmp.next
        }
    }

    print() {
        if(!this.head) {
            return
        }
        let tmp = this.head
        let res = []
        while(tmp){
            res.push(tmp.data)
            tmp = tmp.next
        }
        console.log(res.join(' -> '));
    }
}

const list = new LinkedList()
list.append('a')
list.append('b')
list.append('c')
list.print()
list.prepend('-a')
list.print()
list.delete('a')
list.print()
