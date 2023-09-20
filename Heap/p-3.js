class MinHeap {
    constructor() {
        this.heap = []
    }

    parentIndex(i) {
        return Math.floor((i - 1) / 2)
    }

    leftIndex(i) {
        return 2 * i + 1
    }

    rightIndex(i) {
        return 2 * i + 2
    }

    size() {
        return this.heap.length
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    shiftUp(i) {
        let p = this.parentIndex(i)
        while (p >= 0 && this.heap[i] < this.heap[p]) {
            this.swap(i, p)
            i = p
            p = this.parentIndex(i)
        }
    }

    insert(data) {
        this.heap.push(data)
        this.shiftUp(this.size - 1)
    }

    shiftDown(i) {
        let l = this.leftIndex(i)
        let size = this.size()
        let minI
        while(l < size) {
            r = this.rightIndex(i)
            if(r < this.size() && this.heap[r] < this.heap[l]) minI = r
            else minI = l
            if(this.heap[minI] < this.heap[i]){
                this.swap(minI, i)
                i = minI
                l = this.leftIndex(i)
            } else break
        }
    }

    remove() {
        this.heap[0] = this.heap.pop()
        this.shiftDown(0)
    }

    heapify(arr) {
        this.heap = arr
        for (let i = this.parentIndex(this.size - 1); i >= 0; i--) {
            this.shiftDown(i)
        }
    }
}