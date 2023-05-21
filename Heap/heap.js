class MinHeap {
    constructor() {
        this.heap = []
    }

    getParentIndex(cI) {
        return Math.floor((cI - 1) / 2)
    }

    getLeftIndex(pI) {
        return 2 * pI + 1
    }

    getRightIndex(pI) {
        return 2 * pI + 2
    }

    hasParent(i) {
        return this.getParentIndex(i) >= 0
    }

    parentValue(i) {
        return this.heap[this.getParentIndex(i)]
    }

    hasLeft(i) {
        return this.getLeftIndex(i) < this.heap.length
    }

    hasRight(i) {
        return this.getRightIndex(i) < this.heap.length
    }

    getLeftValue(pI) {
        return this.heap[this.getLeftIndex(pI)]
    }

    getRightValue(pI) {
        return this.heap[this.getRightIndex(pI)]
    }

    heapifyDown() {
        let i = 0
        while (this.hasLeft(i)) {
            let smallI = this.getLeftIndex(i)
            if (this.hasRight(i) && this.getRightValue(i) < this.getLeftValue(i)) {
                smallI = this.getRightIndex(i)
            }
            if (this.heap[i] < this.heap[smallI]) break
            else[this.heap[i], this.heap[smallI]] = [this.heap[smallI], this.heap[i]]
            i = smallI
        }
    }

    heapifyUp() {
        let i = this.heap.length - 1
        while (this.hasParent(i) && this.parentValue(i) > this.heap[i]) {
            let pI = this.getParentIndex(i);
            [this.heap[pI], this.heap[i]] = [this.heap[i], this.heap[pI]]
            i = pI
        }
    }

    add(data) {
        this.heap.push(data)
        this.heapifyUp()
    }

    peek() {
        return this.heap[0]
    }

    poll() {
        if (this.heap.length === 0) return null
        if (this.heap.length === 1) return this.heap.pop()
        let data = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return data
    }

    display() {
        console.log(this.heap)
    }
}

const heap = new MinHeap()
heap.add(8)
heap.add(6)
heap.add(2)
heap.display()
heap.add(1)
heap.add(5)
heap.add(15)
heap.display()
console.log('Peeked : ',heap.peek())
heap.poll()
heap.display()
heap.poll()
heap.display()