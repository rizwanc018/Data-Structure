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
        if (!this.root) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }

    insertNode(parent, newNode) {
        if (newNode.data < parent.data) {
            if (!parent.left) parent.left = newNode
            else this.insertNode(parent.left, newNode)
        } else {
            if (!parent.right) parent.right = newNode
            else this.insertNode(parent.right, newNode)
        }
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

    levelOrderTraversal(root) {
        if (!root) return []
        let result = []
        let queue = [root]
        while (queue.length) {
            let subArr = []
            let n = queue.length
            for (let i = 0; i < n; i++) {
                let node = queue.pop()
                subArr.push(node.data)
                if (node.left) queue.unshift(node.left)
                if (node.right) queue.unshift(node.right)
            }
            result.push(subArr)
        }
        return result
    }

    printAllLeaves(root) {
        if (!root) return null
        if (!root.left && !root.right) {
            console.log(root.data)
            return
        }
        if (root.left) this.printAllLeaves(root.left)
        if (root.right) this.printAllLeaves(root.right)
    }


    printAllNonLeaves(root) {
        if (!root || (!root.left && !root.right)) return
        if (root.left || root.right) {
            console.log(root.data)
        }
        if (root.left) this.printAllNonLeaves(root.left)
        if (root.right) this.printAllNonLeaves(root.right)
    }

    height(root) {
        if (!root) return -1
        let lHeigth = this.height(root.left)
        let rHeight = this.height(root.right)
        return Math.max(lHeigth, rHeight) + 1
    }

    smallestNode(root) {
        while (root && root.left) {
            root = root.left
        }
        return root.data
    }

    largestNode(root) {
        while (root && root.right) {
            root = root.right
        }
        return root.data
    }

    nodeCount(root) {
        if (!root) return 0
        return this.nodeCount(root.left) + this.nodeCount(root.right) + 1
    }

    deleteNode(root, value) {
        if (!root) {
            return root
        }

        if (value < root.data) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.data) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) root = null
            else if (!root.left) root = root.right
            else if (!root.right) root = root.left
            else {
                let minValNode = this.smallestNode(root.right)
                root.data = minValNode
                root.right = this.deleteNode(root.right, minValNode)
            }
        }
        return root
    }

    search(root, value) {
        if (!root) {
            return false
        }

        if (value < root.data)
            return this.search(root.left, value)
        else if (value > root.data) 
            return this.search(root.right, value)
        else return true
    }
}


const bst = new BinarySearchTree()
bst.insert(50)
bst.insert(30)
bst.insert(20)
bst.insert(40)
bst.insert(70)
bst.insert(60)
bst.insert(80)
// bst.inOrderTraversal(bst.root)
// bst.preOrderTraversal(bst.root)
// bst.postOrderTraversal(bst.root)
// console.log(bst.levelOrderTraversal(bst.root))
// console.log(bst.printAllNonLeaves(bst.root))
// console.log(bst.nodeCount(bst.root))
// console.log(JSON.stringify(bst.root, null, 2))
// console.log(bst.deleteNode(bst.root, 30))
// console.log(JSON.stringify(bst.root, null, 2))
// console.log(bst.search(bst.root, 31))


// def inorderTraversal(root):
//     if not root:
//         return []
//     return inorderTraversal(root.left) + [root.val] + inorderTraversal(root.right)