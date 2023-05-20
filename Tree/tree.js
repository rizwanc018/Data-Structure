class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(data) {
        const node = new Node(data)

        if (!this.root) this.root = node
        else {
            let curr = this.root
            while (true) {
                if (data < curr.data) {
                    if (!curr.left) {
                        curr.left = node
                        return this
                    }
                    curr = curr.left
                } else {
                    if (!curr.right) {
                        curr.right = node
                        return this
                    }
                    curr = curr.right
                }
            }
        }
    }

    display() {
        if (!this.root) {
            console.log('Tree is empty.');
            return;
        }
        const queue = [this.root];
        console.log("queue : ",queue)
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


const tree = new BinaryTree();
tree.insert(5)
tree.insert(3)
tree.insert(8)
tree.insert(8)
tree.insert(1)
tree.insert(4)
tree.insert(7)
tree.insert(9)
tree.display()

