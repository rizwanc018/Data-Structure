// class Stack {
//     constructor() {
//         this.items = []
//     }

//     push(data) {
//         this.items.push(data)
//     }

//     pop(){
//         if(this.items.length === 0) return "Stack underflow"
//         return this.items.pop()
//     }
// }

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
        if (!this.top) return "Stack underflow"

        let popped = this.top
        this.top = this.top.next
        popped.next = null
        return popped.data
    }
}