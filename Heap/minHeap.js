class minHeap {
    constructor() {
        this.heap = []
    }

    heapify(arr) {
        this.heap = arr
        let l = arr.length
        for (let i = l / 2 - 1; i >= 0; i--) {
            this.shiftDown(i)
        }
    }

    // heapifyHelper(arr, n, i) {
    //     let s = i
    //     let l = 2 * i + 1
    //     let r = 2 * i + 2
    //     if (l < n && arr[l] < arr[s]) s = l
    //     if (l < n && arr[r] < arr[s]) s = r
    //     if (s !== i) {
    //         [arr[s], arr[i]] = [arr[i], arr[s]]
    //         this.heapifyHelper(arr, n, s)
    //     }
    // }

    shiftDown(i) {
        let l = 2 * i + 1
        while (l < this.heap.length) {
            let r = 2 * i + 2
            let s
            if (r < this.heap.length && this.heap[r] < this.heap[i]) s = r
            else s = l
            if (this.heap[s] < this.heap[i]) {
                [this.heap[s], this.heap[i]] = [this.heap[i], this.heap[s]]
                i = s
                l = 2 * i + 1
            } else return
        }
    }
    shiftUp(i) {
        let p = (i - 1) / 2
        while (p >= 0 && this.heap[i] < this.heap[p]) {
            [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
            i = p
            p = (p - 1) / 2
        }
    }

    insert(val) {
        this.heap.push(val)
        this.shiftUp(this.heap.length - 1)
    }

    remove() {
        if (this.heap.length === 0) return
        if (this.heap.length === 1) {
            this.heap.pop()
            return
        }
        this.heap[0] = this.heap.pop()
        this.shiftDown(0)
    }

    heapSort() {
        let l = this.heap.length
        for (let i = Math.floor(l / 2) - 1; i >= 0; i--)
            this.heapSortHelper(this.heap, l, i)

        for (let i = l - 1; i > 0; i--) {
            [this.heap[0], this.heap[i]] = [this.heap[i], this.heap[0]]
            this.heapSortHelper(this.heap, i, 0)
        }
    }

    heapSortHelper(arr, n, i) {
        let s = i
        let l = 2 * i + 1
        let r = 2 * i + 1
        if (l < n && arr[l] < arr[s]) s = l
        if (r < n && arr[r] < arr[s]) s = r
        if (s !== i) {
            [arr[s], arr[i]] = [arr[i], arr[s]]
            this.heapSortHelper(arr, n, s)
        }
    }

}

let a = [1, 5, 15, 7]
const heap = new minHeap()
heap.heapify(a)
console.log(heap.heap)
heap.remove()
console.log(heap.heap)
heap.insert(2)
heap.heapSort()
console.log(heap.heap)