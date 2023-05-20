class Stack {
    constructor() {
        this.items = []
    }

    push(data) {
        this.items.push(data)
    }

    isEmpty() {
        return this.items.length === 0 
    }

    pop() {
        if(this.isEmpty()) {
            return "Underflow"
        }
        return this.items.pop()
    }

    peek() {
        if(this.isEmpty()) {
            return "Underflow"
        }
        return this.items[this.items.length - 1]
    }

    display() {
        for(let i = this.items.length-1; i >= 0; i--) {
            console.log(this.items[i])
        }
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.display()
console.log('Popped: ',stack.pop());

stack.push(4)
stack.display()

console.log('Peek :',stack.peek());
