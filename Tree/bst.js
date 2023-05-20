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
        if (!root.left && !root.right){
            console.log(root.data)
            return 
        }
        if(root.left) this.printAllLeaves(root.left)
        if(root.right) this.printAllLeaves(root.right)
    }


    printAllNonLeaves(root) {
        if (!root || (!root.left && !root.right)) return
        if(root.left || root.right){
            console.log(root.data)
        }
        if(root.left) this.printAllNonLeaves(root.left)
        if(root.right) this.printAllNonLeaves(root.right)
    }

    display() {
        if (!this.root) {
            console.log('Tree is empty.');
            return;
        }
        const queue = [this.root];
        let result = '';

        while (queue.length > 0) {
            const levelSize = queue.length;

            for (let i = 0; i < levelSize; i++) {
                const currentNode = queue.shift();
                result += currentNode.data + ' ';

                if (currentNode.left) {
                    queue.push(currentNode.left);
                }

                if (currentNode.right) {
                    queue.push(currentNode.right);
                }
            }

            result += '\n';
        }

        console.log(result);
    }
}


const bst = new BinarySearchTree();
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(7);
bst.insert(13);
bst.inOrderTraversal(bst.root)
bst.preOrderTraversal(bst.root)
bst.postOrderTraversal(bst.root)
console.log(bst.levelOrderTraversal(bst.root))
console.log(bst.printAllNonLeaves(bst.root))