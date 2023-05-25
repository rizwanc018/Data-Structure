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

    isEmpty() {
        return !this.root
    }

    insert(data) {
        const node = new Node(data)
        if (!this.root) this.root = node
        else this.insertHelper(this.root, node)
    }

    insertHelper(root, node) {
        if (node.data < root.data) {
            if (!root.left) root.left = node
            this.insertHelper(root.left, node)
        } else if (node.data > root.data) {
            if (!root.right) root.right = node
            this.insertHelper(root.right, node)
        }
    }

    search(root, data) {
        if (!root) {
            return false
        }
        if (data < root.data) return this.search(root.left, data)
        if (data > root.data) return this.search(root.right, data)
        else return true

    }

    inOrderTraversal(root) {
        if (root) {
            this.inOrderTraversal(root.left)
            console.log(root.data)
            this.inOrderTraversal(root.right)
        }
    }

    preOrderTraversal(root) {
        if (root) {
            console.log(root.data)
            this.preOrderTraversal(root.left)
            this.preOrderTraversal(root.right)
        }
    }

    postOrderTraversal(root) {
        if (root) {
            this.postOrderTraversal(root.left)
            this.postOrderTraversal(root.right)
            console.log(root.data)
        }
    }

    levelOrderTraversal() {
        if (this.root) {
            let queue = [this.root]
            let result = []
            while (queue.length > 0) {
                let curr = queue.shift()
                result.push(curr.data)
                if (curr.left) queue.push(curr.left)
                if (curr.right) queue.push(curr.right)
            }
            console.log(result)
        }
    }

    delete(data) {
        this.root = this.deleteHelper(this.root, data)
    }

    deleteHelper(root, data) {
        if (!root) return root
        if (data < root.data) root.left = this.deleteHelper(root.left, data)
        else if (data > root.data) root.right = this.deleteHelper(root.right, data)
        else {
            if (!root.left && !root.right) return null
            else if (!root.left) return root.right
            else if (!root.right) return root.left
            else {
                root.data = this.getMin(root.right)
                root.right = this.deleteHelper(root.right, root.data)
            }
        }
        return root
    }

    findClosetOf(value) {
        if (this.root)
            return this.findClosestHelper(this.root, value, this.root.data)
        else return
    }

    findClosestHelper(root, value, closest) {
        if (!root) return closest
        if (Math.abs(value - closest) > Math.abs(value - root.data))
            closest = root.data
        if (value < root.data) return this.findClosestHelper(root.left, value, closest)
        else if (value > root.data) return this.findClosestHelper(root.data, value, closest)
        else return closest

    }

    getMin(root) {
        if (root.left) return this.getMin(root.left)
        return root.data
    }

    getMax(root) {
        if (root.right) return this.getMin(root.right)
        return root.data
    }

    height(root) {
        if (!root) return -1
        let l, r = 0
        l = this.height(root.left)
        r = this.height(root.right)
        return Math.max(l, r) + 1
    }

    checkBST(root, min, max) {
        if (!root) return true
        if (root.data > min && root.data < max) {
            return (this.checkBST(root.left, min, root.data) &&
                this.checkBST(root.right, root.data, max)
            )
        }
    }

    isValidBST(root) {
        if (!root) return true
        if (this.checkBST(root.left, -Infinity, root.data) &&
            this.checkBST(root.right, root.data, Infinity))
            return true
        return false
    }
}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log(bst.height(bst.root));
// console.log(bst.isEmpty());
// console.log(bst.search(bst.root, 12))
bst.delete(7)
// bst.preOrderTraversal(bst.root)
// bst.levelOrderTraversal()
// console.log(bst.getMax(bst.root));


