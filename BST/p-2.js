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
            this.insertNode(this.root, node)
        }
    }

    insertNode(parent, child) {
        if (child.data < parent.data) {
            if (!parent.left) parent.left = child
            else this.insertNode(parent.left, child)
        } else if (child.data > parent.data) {
            if (!parent.right) parent.right = child
            else this.insertNode(parent.right, child)
        }
    }

    inOrderTraversal(node) {
        if(node) {
            this.inOrderTraversal(node.left)
            console.log(node.data)
            this.inOrderTraversal(node.right)
        }
    }

    search(data) {
        return this.searchHelper(this.root, data)
    }

    searchHelper(node,data) {
        if(!node) return false
        if(data < node.data) {
            return this.searchHelper(node.left, data)
        } else if(data > node.data) {
            return this.searchHelper(node.right, data)
        } else {
            return true
        }
    }

    delete(data) {
        this.deleteHeper(this.root, data)
    }

    smallestNode(root) {
        while(root && root.left) {
            root = root.left
        }
        return root.data
    }

    deleteHelper(node, data) {
        if(data < node.data) {
            this.deleteHelper(node.left,data)
        } else if(data > node.data) {
            this.deleteHelper(node.right, data)
        } else {
            if(!node.left && !node.right) node = null
            else if(!node.left) node = node.right
            else if(!node.right) node = node.left
            else {
                let minVal = this.smallestNode(node.right)
                node.data = minVal
                this.deleteHelper(node.right, minVal)
            }
        }
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

bst.inOrderTraversal(bst.root)
console.log(bst.search(31))

