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

    append(data) {
        const node = new Node(data)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
    }

    insertBefore(before, data) {
        const node = new Node(data)
        if (!this.head) {
            console.log("The given list is null.");
            return
        }
        if(this.head.data === before) {
            this.head.prev = node
            node.next = this.head
            this.head = node
            return 
        }
        let tmp = this.head
        while (tmp !== null) {
            if (tmp.data === before) {
                node.next = tmp 
                node.prev = tmp.prev
                tmp.prev.next = node
                tmp.prev = node
                return
            } else {
                tmp = tmp.next
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

    printReverse() {
        if (!this.tail) {
            return
        }

        let tmp = this.tail
        let res = []
        while (tmp) {
            res.push(tmp.data)
            tmp = tmp.prev
        }
        console.log(res.join(' <=> '));
    }

}

const dList = new DoubleLinkedList()
dList.append('a')
dList.append('b')
dList.append('d')
dList.print()
dList.printReverse()
dList.insertBefore('d', 'c')
dList.print()
dList.printReverse()