class Heap {
    constructor() {
        this.heap = []
    }

    parentIndex(i) {
        return Math.floor(i - 1 / 2)
    }

    leftIndex(i) {
        return 2 * i + 1
    }

    rightIndex(i) {
        return 2 * i + 2
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    shiftUp(i) {
        let p = this.parentIndex(i)
        while (p >= 0 && this.heap[p] > this.heap[i]) {
            this.swap[p, i]
            i = p
            p = this.parentIndex(i)
        }
    }

    shiftDown(i) {
        let l = this.leftIndex(i)
        let minI
        while (l < this.heap.length - 1) {
            let r = this.rightIndex(i)
            if (r < this.heap.length - 1 && this.heap[r] < this.heap[l]) minI = r
            else minI = l

            if (this.heap[minI] < this.heap[i]) {
                this.swap(minI, i)
                i = minI
                l = this.parentIndex(minI)
            } else break
        }
    }

    insert(data) {
        this.heap.push(data)
    }

    remove() {
        this.heap[0] = this.heap.pop()
        this.shiftDown(0)
    }

    heapify(arr) {
        this.heap = [...arr]
        for(let i = this.parentIndex(arr.length -1); i >= 0; i--){
            this.shiftDown(i)
        }
    }
}

