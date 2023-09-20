class Heap {
    constructor() {
        this.arr = []
    }

    parenetIndex(i) {
        return Math.floor((i - 1) / 2)
    }

    leftChildIndex(i) {
        return (2 * i) + 1
    }

    rightChildIndex(i) {
        return (2 * i) + 2
    }

    swap(i, j) {
        [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]]
    }


    shiftUp(i) {
        let p = this.leftChildIndex(i)
        while (p >= 0 && this.arr[p] < this.arr[i]) {
            this.swap(i, p)
            i = p
            p = this.parenetIndex(i)
        }
    }

    shiftDown(i) {
        let l = this.leftChildIndex(i)
        let minI
        while (l <= this.arr.length - 1) {
            r = this.rightChildIndex(i)
            if(r <= this.arr.length - 1 && this.arr[r] < this.arr[l]) minI = r
            else minI = l

            if(this.arr[minI] < this.arr[i]) {
                this.swap(minI, i)
                i = minI
                l = this.leftChildIndex(i)
            } else break
        }
    }

    insert(data) {
        this.arr.push(data)
        this.shiftUp(this.arr.length - 1)
    }

    delete() {
        let tmp = this.arr[0]
        this.arr[0] = this.arr.pop()
        this.shiftDown(0)
        return tmp
    }

    heapify(arr) {
        this.arr = arr
        for(let i = this.parenetIndex(this.arr.length); i >= 0; i--)
            this.shiftDown(i)
    }

    heapSort(){
        let newArr = []
        let l = this.arr.length

        for(let i = 0; i < l; i++) {
            newArr[i] = this.delete()
        }
        return newArr
    }
}