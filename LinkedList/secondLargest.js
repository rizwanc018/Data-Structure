class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(data) {
        const node = new Node(data)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }

    }

    // secondLargest() {
    //     let l = this.head.data
    //     let sl = this.head.data
    //     let curr = this.head.next

    //     while(curr) {
    //         if(curr.data > l) {
    //             sl = l
    //             l = curr.data
    //         } else if (curr.data > l && curr.data !== l){
    //             sl  = curr.data
    //         }
    //         curr = curr.next
    //     }

    //     console.log('Sl is : ', sl)
    // }

    secondLargest() {
        let l = -Infinity
        let sl = -Infinity
        let curr = this.head
        
        while(curr) {
            if(curr.data > l) {
                sl = l
                l = curr.data
            } else if(curr.data > sl && curr.data !== l) {
                sl = curr.data
            }
            curr = curr.next
        }

        console.log('Sl is : ', sl)
    }
}

const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(5);
linkedList.append(15);
linkedList.append(7);
linkedList.append(20);

linkedList.secondLargest()

// const letters = new Set();

// // Add Values to the Set
// letters.add("a");
// letters.add("b");
// letters.add("c");
// console.log(letters.has())
  