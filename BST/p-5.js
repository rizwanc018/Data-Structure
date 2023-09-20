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

    insert(data) {
        let node = new Node(data)
        if(!this.root) this.root = node
        else this.insertHelper(this.root, node)
    }

    insertHelper(parent, child) {
        if(child.data < parent.data) {
            if(!parent.left) parent.left = node
            else this.insertHelper(parent.left, node)
        } else if(child.data > parent.data) {
            if(!parent.right) parent.right = node
            else this.insertHelper(parent.right, node)
        }
    }

    search(data) {
        return this.searchHelper(this.root, data)
    }

    searchHelper(parent, data){
        if(!parent) return false
        if(data < parent.data ) return this.searchHelper(parent.left, data)
        else if(data > parent.data) return this.searchHelper(parent.right, data)
        else return true
    }

    getMin(parent){
        if(!parent.left) return parent.data
        else return this.getMin(parent.left)
    }

    delete(data){
        this.deleteHelper(this.root, data)
    }

    deleteHelper(parent, data) {
        if(data < parent.data) parent.left = this.deleteHelper(parent.left, data)
        else if(data > parent.data) parent.right = this.deleteHelper(parent.right, data)
        else {
            if(!parent.left && !parent.right) parent =  null
            else if(!parent.left) parent =  parent.right
            else if(!parent.right) parent =  parent.left
            else {
                let min = this.getMin(parent.right)
                parent.data = min
                parent.right = this.deleteHelper(parent.right, min)
            }

        }
    }

    Inordertaversal(root) {
        if(root) {
            this.Inordertaversal(root.left)
            console.log(root.left)
            this.Inordertaversal(root.right)
        }
        
    }
}