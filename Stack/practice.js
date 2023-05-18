class Node{
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
    }

    push(data) {
        const node = new Node(data)
        node.next = this.top
        this.top = node
    }

    pop(){
        if(!this.top){
            return null
        }

        const popped = this.top
        this.top = this.top.next
        return popped
    }

    peek() {
        if(!this.top) {
            return null
        }
        return this.top.data
    }

    isEmpty(){
        return this.top === null
    }

    display(){
        let curr = this.top
        while(curr) {
            console.log(curr.data)
            curr = curr.next
        }
    }
}


const stack = new Stack()
console.log('Empty : ', stack.isEmpty())
stack.push(1)
stack.push(2)
stack.push(3)
stack.display()
console.log('\n')

stack.pop()
console.log('Popped :', stack.pop());
stack.display()
console.log('\n')

stack.push(4)
stack.display()
