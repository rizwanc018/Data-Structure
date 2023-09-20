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
        else if (value < root.data) return this.search(root.left, value)
        else if (value > root.data) return this.search(root.right, value)
        else return true
    }

    preorderTraversal(root) {
        if (root) {
            console.log(root.data)
            this.preorderTraversal(root.left)
            this.preorderTraversal(root.right)
        }
    }

    indorderTraversal(root) {
        if (root) {
            this.indorderTraversal(root.left)
            console.log(root.data)
            this.indorderTraversal(root.right)
        }
    }

    postOrderTraversal(root) {
        if (root) {
            this.postOrderTraversal(root.left)
            this.postOrderTraversal(root.right)
            console.log(root.data)
        }
    }

    levelorderTraversal() {
        const queue = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.data)
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
    }

    getMin(root) {
        if (!root.left) return root.data
        return this.getMin(root.left)
    }

    getMax(root) {
        if (!root.right) return root.data
        return this.getMax(root.right)
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (!root) return root
        if (value < root.data) root.left = this.deleteNode(root.left, value)
        else if (value > root.data) root.right = this.deleteNode(root.right, value)
        else {
            if (!root.left && !root.right) root =  null
            else if (!root.left) root =  root.right
            else if (!root.right) root =  root.left
            else {
                root.data = getMin(root.right)
                root.right = this.deleteNode(root.right, root.data)
            }
        }
        return root
    }

    findClosest(target) {
        return this.findClosestHelper(this.root, target, this.root.data)
    }

    findClosestHelper(node, target, closest) {
        if (node == null)
            return closest
        if (Math.abs(target - closest) > Math.abs(target - node.data))
            closest = node.data
        if (target < node.data) return this.findClosestHelper(node.left, target, closest)
        else if (target > node.data) return this.findClosestHelper(node.right, target, closest)
        else return closest
    }
}



const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
// bst.delete(3)
bst.delete(7)
// bst.indorderTraversal(bst.root)
console.log(bst.findClosest(2))
// console.log(bst.search(bst.root, 12))
// console.log(bst.getMin(bst.root))
// console.log(bst.getMax(bst.root))
