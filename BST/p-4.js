class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insertHelper(root, node) {
        if (node.data < root.data) {
            if (!root.left) root.left = node
            else this.insertHelper(this.root.left, node)
        } else if (node.data > root.data) {
            if (!root.right) root.right = node
            else this.insertHelper(this.root.right, node)
        }
    }

    insert(data) {
        let node = new Node(data)
        if (!this.root) this.root = node
        else this.insertHelper(this.root, node)
    }

    search(root, data) {
        if (!root) return false

        if (data < root.data) return this.search(root.left, data)
        else if (data > root.data) return this.search(root.right, data)
        else return true
    }

    getMin(root) {
        if(!root.left) return root.data
        else return(this.getMin(this.root.left))
    }

    delete(root, data) {
        if(!root) return 
        if(data < root.data) root.left = this.delete(root.left, data)
        else if(data > root.data) root.right = this.delete(root.right, data)
        else {
            if(!root.left && !root.right) root = null
            else if(!root.left) return root.right
            else if(!root.right) return root.left
            else {
                const min = this.getMin(root.right)
                root.data = min
                this.delete(root.right, min)
            }
        }
    }

    inordertraversal(root) {
        if(root) {
            this.inordertraversal(root.left)
            console.log(root.data)
            this.inordertraversal(root.right)
        }
    }

    
}

let bst = new BST
bst.insert(8)
bst.insert(3)
bst.insert(11)
bst.insert(10)
console.log(JSON.stringify(bst.root))
bst.inordertraversal(bst.root)