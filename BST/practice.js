class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEpmty() {
        return this.root === null
    }

    insert(data) {
        const node = new Node(data)
        if (this.isEpmty())
            this.root = node
        this.insertNode(this.root, node)
    }

    insertNode(root, newNode) {
        if (newNode.data < root.data) {
            if (!root.left) root.left = newNode
            else this.insertNode(root.left, newNode)
        } else if (newNode.data > root.data) {
            if (!root.right) root.right = newNode
            else this.insertNode(root.right, newNode)
        }
    }

    search(root, value) {
        if (!root) return false

        if (value < root.data) this.search(root.left, value)
        else if (value > root.data) this.search(root.right, value)
        else return true
    }
}


const bst = new BinarySearchTree()
console.log('Is empty : ', bst.isEpmty())
bst.insert(10)
bst.insert(5)
bst.insert(15)
console.log(bst.search(10))