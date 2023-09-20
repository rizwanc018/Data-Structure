class minheap {
  constructor(value) {
    this.heap = [];
  }

  parent(i) {
    return Math.floor(i - 1) / 2;
  }

  leftchild(i) {
    return 2 * i + 1;
  }

  rightchild(i) {
    return 2 * i + 2;
  }

  size() {
    return this.heap.length - 1;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(value) {
    this.heap.push(value);
    this.heapup(this.size());
  }

  heapup(i) {
    let parents = this.parent(i);
    while (i >= 0 && this.heap[i] < this.heap[parents]) {
      this.swap(i, parents);
      i = parents;
      parents = this.parent(i);
    }
  }

  heapBuild(array) {
    this.heap = [...array];
    for (let i = this.parent(this.size()); i >= 0; i--) {
      this.shiftdown(i);
    }
  }

  //     heapify(arr) {
  //         this.heap = arr
  //         let l = arr.length
  //         for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
  //             this.shiftDown(i)
  //         }
  //     }


  delete(value) {
    this.swap(0, this.size());
    this.heap.pop();
    this.shiftdown(0);
  }

  shiftdown(i) {
    let size = this.size();
    let left = this.leftChild(i);
    let right = this.rightChild(i);
    let smallest;
    while (left <= size) {
      if (right <= size && this.heap[right] < this.heap[left]) {
        smallest = right;
      } else {
        smallest = left;
      }
      if (this.heap[i] > this.heap[smallest]) {
        this.swap(i, smallest);
        i = smallest;
        left = this.leftChild(i);
      } else {
        return;
      }
    }
  }

}

const h = new minheap();
h.insert(32)
h.insert(34)
h.insert(21)
h.insert(15)
// h.insert(4);
// h.insert(1);
// h.insert(7);
// h.insert(2);
// h.insert(5);
// h.insert(3);
console.log(h);



// class MaxHeap {
//     constructor() {
//         this.heap = []
//     }

//     heapify(arr) {
//         this.heap = arr
//         let l = arr.length
//         // for (let i = Math.floor(l / 2 - 1); i >= 0; i--) {
//         for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
//             this.shiftDown(i)
//         }
//     }

//     insert(data) {
//         this.heap.push(data)
//         this.shiftUp(this.heap.length - 1)
//     }

//     shiftDown(i) {
//         let l = 2 * i + 1
//         let maxI
//         while (l < this.heap.length) {
//             let r = 2 * i + 2
//             if (r < this.heap.length && this.heap[r] > this.heap[l]) maxI = r
//             else maxI = l
//             if (this.heap[maxI] > this.heap[i]) {
//                 [this.heap[i], this.heap[maxI]] = [this.heap[maxI], this.heap[i]]
//                 i = maxI
//                 l = 2 * i + 1
//             } else break
//         }
//     }

//     shiftUp(i) {
//         let p = Math.floor((i - 1) / 2)
//         while (p >= 0 && this.heap[i] > this.heap[p]) {
//             [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]]
//             i = p
//             p = Math.floor(p - 1 / 2)
//         }
//     }

//     remove() {
//         this.heap[0] = this.heap.pop()
//         this.shiftDown(0)
//     }

//     heapSort(arr) {
//         this.heapify(arr)
//         let hS = arr.length
//         while (hS > 0) {
//             [this.heap[0], this.heap[hS - 1]] = [this.heap[hS - 1], this.heap[0]]
//             hS--
//             this.heapSortHelper(0, hS)
//         }
//     }

//     heapSortHelper(i, s) {
//         let l = 2 * i + 1
//         let maxI
//         while (l < s) {
//             let r = 2 * i + 2
//             if (r < s && this.heap[r] > this.heap[l]) maxI = r
//             else maxI = l
//             if (this.heap[maxI] > this.heap[i]) {
//                 [this.heap[maxI], this.heap[i]] = [this.heap[i], this.heap[maxI]]
//                 i = maxI
//                 l = 2 * i + 1
//             } else {
//                 break
//             }
//         }
//     }
// }


// const heap = new MaxHeap()
// heap.insert(10)
// heap.insert(7)
// heap.insert(3)
// heap.insert(4)
// heap.insert(6)


// // heap.remove()
// console.log(heap.heap)
// // let a = [12, 5,8, 9, 20, 21, 14, 15, 7, 16]

// // let a = [12, 5, 15, 7, 16]
// // const heap = new MaxHeap()
// // heap.heapSort(a)
// // console.log(a)