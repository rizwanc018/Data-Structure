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
        let node = new Node(data)
        if (!this.root) {
            this.root = node
        } else {
            this.insertHelper(this.root, node)
        }
    }

    insertHelper(parent, child) {
        if (child.data < parent.data) {
            if (!parent.left) parent.left = node
            else this.insertHelper(parent.left, node)
        } else if (child.data > parent.data) {
            if (!parent.right) parent.right = node
            else this.insertHelper(parent.right, node)
        }
    }

    inOrderTaraversal(node) {
        if (node) {
            this.inOrderTaraversal(node.left)
            console.log(node.data)
            this.inOrderTaraversal(node.right)
        }
    }

    search(root, data) {
        if (!root) return false
        else if (root.data < data) return this.search(root.left, data)
        else if (root.data > data) return this.search(root.right, data)
        else return true
    }

    getMin(root) {
        if (!root.left) return root.data
        else return (this.getMin(root.left))
    }

    delete(root, data) {
        if (data < root.left) root.left = this.delete(root.left, data)
        else if (data > root.right) root.right = this.delete(root.right, data)
        else {
            if (!root.left && !root.right) return null
            else if (!root.left) return root.right
            else if (!root.right) return root.right
            else {
                root.data = this.getMin(root.right)
                root.right = this.delete(root.right, root.data)
            }
        }
    }

}