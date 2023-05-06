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

    insertNextTo(nextTo, data) {
        const node = new Node(data)
        let tmp = this.head
        while(tmp !== null) {
            if(tmp.data === nextTo) {
                if(tmp === this.tail) {
                    tmp.next = node
                    this.tail = node
                    return
                }

                node.next = tmp.next
                tmp.next = node
                return
            } else {
                tmp = tmp.next
            }
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

    removeDuplicate() {
        let curr = this.head
        while(curr !== null) {
            let nxt = curr.next
            while(nxt !== null && curr.data === nxt.data) {
                nxt = nxt.next
            }
            curr.next = nxt
            curr = nxt
            if(nxt === this.tail) {
                this.tail = curr
            }
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

    printTail(){
        console.log('Tail is: ',this.tail)
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
list.print()
// list.printTail()
// list.insertNextTo('d','f')
list.removeDuplicate()
list.print()
list.printTail()

