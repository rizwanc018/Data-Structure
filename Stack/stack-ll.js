// class Node {
//     constructor(data) {
//         this.data = data
//         this.next = null
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null
//         this.count = 0
//     }

//     push(data) {
//         const node = new Node(data)
//         if (!this.top) {
//             this.top = node
//         } else {
//             node.next = this.top
//             this.top = node
//         }
//         this.count++
//     }

//     pop() {
//         if (!this.top)
//             return "UnderFlow"
//         let popped = this.top
//         this.top = this.top.next
//         this.count--
//         return popped
//     }

//     display() {
//         let curr = this.top
//         while(curr !== null) {
//             console.log(curr.data)
//             curr = curr.next
//         }
//     }

//     size(){
//         return this.count
//     }

// }

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
        this.count = 0
    }

    push(data){
        const node = new Node(data)
        if(!this.top){
            this.top = node
        } else {
            node.next = this.top
            this.top = node
        }
        this.count++
        
    }

    pop() {
        if(!this.top) return 'Underflow'
        let popped = this.top.data
        this.top = this.top.next
        this.count--
        return popped
    }

    size(){
        return this.count
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log('size',stack.size())

// stack.display()
console.log('\n')

stack.pop()
console.log('Popped', stack.pop());
// stack.display()
console.log('\n')

stack.push(4)
// stack.display()
console.log('size',stack.size())

