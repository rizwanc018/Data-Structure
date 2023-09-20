// class HashTable {
//     constructor(size) {
//         this.arr = []
//         this.size = size
//     }

//     hash(key) {
//         let total = 0
//         for(let i =0; i < key.length; i++) {
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key ,value) {
//         const i = this.hash(key)
//         this.arr[i] = value
//     }

//     get(key) {
//         const i = this.hash(key)
//         return this.arr[i]
//     }

//     delete(key) {
//         const i = this.hash(key)
//         this.arr[i] = undefined
//     }
// }

class HashTable {
    constructor(size) {
        this.arr = []
        this.size = size
    }

    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value) {
        const i = this.hash(key)
        const bucket = this.arr[i]
        if (!bucket) {
            this.arr[i] = [[key, value]]
        } else {
            const samekeyItem = bucket.find(item => item[0] === key)
            if (samekeyItem) samekeyItem[1] = value
            else bucket.push([key, value])
        }
    }

    get(key) {
        const i = this.hash(key)
        const bucket = this.arr[i]
        if (bucket) {
            const samekeyItem = bucket.find(item => item[0] === key)
            if (samekeyItem) {
                return samekeyItem[1]
            }
        } else {
            return undefined
        }
    }

    delete(key) {
        const i = this.hash(key)
        const bucket = this.arr[i]
        if (bucket) {
            const samekeyItem = bucket.find(item => item[0] === key)
            if (samekeyItem)
                bucket.splice(bucket.indexOf(samekeyItem), 1)
        }

    }

    display() {
        console.log(this.arr.length)
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i]) {
                console.log(i, ' -> ', this.arr[i])
            }
        }
    }

}

const ht = new HashTable(10)
ht.set('age', 20)
ht.set('name', 'kyle')
ht.display()
ht.get('age')