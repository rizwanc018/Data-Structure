class MaxHeap {
    constructor() {
        this.heap = []
    }

    heapify(arr) {
        this.heap = arr
        let l = arr.length
        for (let i = Math.floor(l / 2 - 1); i >= 0; i--) {
            this.shiftDown(i)
        }
    }

    insert(data) {
        this.heap.push(data)
        this.shiftUp(this.heap.length - 1)
    }

    shiftDown(i) {
        let l = 2 * i + 1
        let maxI
        while (l < this.heap.length) {
            let r = 2 * i + 2
            if (r < this.heap.length && this.heap[r] > this.heap[l]) maxI = r
            else maxI = l
            if (this.heap[maxI] > this.heap[i]) {
                [this.heap[i], this.heap[maxI]] = [this.heap[maxI], this.heap[i]]
                i = maxI
                l = 2 * i + 1
            } else break
        }
    }

    shiftUp(i) {
        let p = Math.floor(i - 1 / 2)
        while (p >= 0 && this.heap[i] > this.heap[p]) {
            [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]]
            i = p
            p = Math.floor(p - 1 / 2)
        }
    }

    remove() {
        this.heap[0] = this.heap.pop()
        this.shiftDown(0)
    }

    heapSort(arr) {
        this.heapify(arr)
        let hS = arr.length
        while (hS > 0) {
            [this.heap[0], this.heap[hS - 1]] = [this.heap[hS - 1], this.heap[0]]
            hS--
            this.heapSortHelper(0, hS)
        }
    }

    heapSortHelper(i, s) {
        let l = 2 * i + 1
        let maxI
        while (l < s) {
            let r = 2 * i + 2
            if (r < s && this.heap[r] > this.heap[l]) maxI = r
            else maxI = l
            if (this.heap[maxI] > this.heap[i]) {
                [this.heap[maxI], this.heap[i]] = [this.heap[i], this.heap[maxI]]
                i = maxI
                l = 2 * i + 1
            } else {
                break
            }
        }
    }
}


const heap = new MaxHeap()
heap.insert(10)
heap.insert(7)
heap.insert(3)
heap.insert(4)
heap.insert(6)


heap.remove()
console.log(heap.heap)
// let a = [12, 5,8, 9, 20, 21, 14, 15, 7, 16]

// let a = [12, 5, 15, 7, 16]
// const heap = new MaxHeap()
// heap.heapSort(a)
// console.log(a)