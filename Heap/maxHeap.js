class MaxHeap {
    constructor() {
        this.heap = []
    }

    heapify(arr) {
        this.heap = arr
        let l = arr.length
        for (let i = (l / 2) - 1; i >= 0; i--) {
            this.shiftDown(i)
        }
    }
    heapifyHelper(arr, n, i) {
        let largest = i
        let l = 2 * i + 1
        let r = 2 * i + 2
        if (l < n && arr[l] > arr[largest]) largest = l
        if (r < n && arr[r] > arr[largest]) largest = r
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            this.heapifyHelper(arr, n, largest)
        }
    }

    shiftDown(i) {
        let l = 2 * i + 1
        while (l < this.heap.length) {
            let r = 2 * i + 2
            let idxtoShift
            if (r < this.heap.length && this.heap[r] > this.heap[i])
                idxtoShift = r
            else idxtoShift = l
            if (this.heap[idxtoShift] > this.heap[i])
                [this.heap[i], this.heap[idxtoShift]] = [this.heap[idxtoShift], this.heap[i]];
            i = idxtoShift
            l = 2 * i + 1
        }
    }

    shiftUp(i) {
        let p = (i - 1) / 2
        while (p >= 0 && this.heap[i] > this.heap[p]) {
            [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
            p = (p - 1) / 2
        }
    }

    peek() {
        return this.heap[0]
    }
}

let a = [1, 5, 15, 7]
const heap = new MaxHeap()
heap.heapify(a)
console.log(a)