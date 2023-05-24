class MaxHeap {
    constructor() {
        this.heap = []
    }

    heapify(arr) {
        let l = arr.length
        for (let i = (l / 2) - 1; i >= 0; i--) {
            this.heapifyHelper(arr, l, i)
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
}

let a = [1, 5, 15, 7]
const heap = new MaxHeap()
heap.heapify(a)
console.log(a)