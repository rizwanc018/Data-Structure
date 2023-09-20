class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Stack{
    constructor() {
        this.top = null
    }

    push(data) {
        let node = new Node(data)
        node.next = this.top
        this.top = node
    }

    pop() {
        if(this.node === null) return "Stack Underflow"
        let tmp = this.top
        this.top = this.top.next
        tmp.next = null
        return tmp.data
    }
}


// class Stack {
//     constructor() {
//         this.arr = []
//     }

//     push(data) {
//         this.arr.push(data)
//     }

//     pop(data) {
//         if(this.arr.length === 0) return "Stack underflow"
//         this.arr.pop(data)
//     }
// }