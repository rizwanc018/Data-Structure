class MinHeap {
    constructor() {
        this.heap = []
    }

    parentIndex(i) {
        return Math.floor((i - 1) / 2)
    }

    leftChildIndex(p) {
        return 2 * p + 1
    }

    rightChildIndex(p) {
        return 2 * p + 2
    }

    size() {
        return this.heap.length - 1
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    insert(data) {
        this.heap.push(data)
        this.shiftUp(this.size())
    }

    shiftUp(i) {
        let p = this.parentIndex(i)
        while (p >= 0 && this.heap[i] < this.heap[p]) {
            this.swap(i, p)
            i = p
            p = this.parentIndex(i)
        }
    }

    shiftDown(i) {
        let l = this.leftChildIndex(i)
        let size = this.size()
        let minI
        while (l <= size) {
            let r = this.rightChildIndex(i)
            if (r <= size && this.heap[r] < this.heap[l]) minI = r
            else minI = l

            if (this.heap[minI] < this.heap[i]) {
                this.swap(i, minI)
                i = minI
                l = this.leftChildIndex(i)
            } else break
        }
    }

    remove() {
        this.swap(0, this.size())
        this.heap.pop()
        this.shiftDown(0)
    }

    heapify(arr) {
        this.heap = arr
        for (let i = this.parentIndex(this.size()); i >= 0; i--) {
            this.shiftDown(i)
        }
    }
    
    heapSort() {
        let sortedArr = []
        let oGsize = this.size()

        for (let i = 0; i <= oGsize; i++) {
            let min = this.remove()
            sortedArr.push(min)
        }
        return sortedArr
    }
}


const h = new MinHeap();
h.insert(21)
h.insert(15)
h.insert(34)
h.insert(32)
// h.insert(4);
// h.insert(1);
// h.insert(7);
// h.insert(2);
// h.insert(5);
// h.insert(3);
console.log(h);


