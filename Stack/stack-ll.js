class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
    }

    push(data) {
        const node = new Node(data)
        if (!this.top) {
            this.top = node
        } else {
            node.next = this.top
            this.top = node
        }
    }

    pop() {
        if (!this.top)
            return "UnderFlow"

        this.top = this.top.next
    }

    display() {
        let curr = this.top
        while(curr !== null) {
            console.log(curr.data)
            curr = curr.next
        }
    }

}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.display()
console.log('\n')

stack.pop()
console.log('Popped');
stack.display()
console.log('\n')

stack.push(4)
stack.display()
