class BinarySearchTree {
    // ... (other methods)

    findClosestValue(target) {
        return this.findClosestValueHelper(this.root, target, this.root.data);
    }

    findClosestValueHelper(node, target, closest) {
        if (node === null) {
            return closest;
        }

        if (Math.abs(target - closest) > Math.abs(target - node.data)) {
            closest = node.data;
        }

        if (target < node.data) {
            return this.findClosestValueHelper(node.left, target, closest);
        } else if (target > node.data) {
            return this.findClosestValueHelper(node.right, target, closest);
        } else {
            return closest;
        }
    }
}
