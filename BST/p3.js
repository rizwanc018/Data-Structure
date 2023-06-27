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

    insert(data) {
        const node = new Node(data)
        if (!this.root) this.root = node
        else insertHelper(this.root, node)
    }

    insertHelper(root, node) {
        if (node.data < root.data) {
            if (!root.left) root.left = node
            else this.insertHelper(root.left, node)
        } else if (node.data > root.data) {
            if (!root.right) root.right = node
            else this.insertHelper(root.right, node)
        }
    }
    delete(data) {
        this.root = this.deleteHelper(this.root, data)
    }

    deleteHelper(root, data) {
        if (!root) return root
        if (data < root) root.left = this.deleteHelper(root.left, data)
        else if (data > root) root.right = this.deleteHelper(root.right, data)
        else {
            if (!root.left && !root.right) return null
            else if(!root.left) return root.right
            else if(!root.right) return root.right
            else {
                root.data = this.getMin(root.right)
                root.right = this.deleteHelper(root.right, root.data)
            }
        }
        return root
    }
    getMin(root) {
        if(root.left) return this.getMin(root.left)
        return root.data
    }

    height(root){
        if(!root) return -1
        let l,r = 0
        l = this.height(root.left)
        r = this.height(root.right)
        return Math.max(l,r) + 1
    }
}