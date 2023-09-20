// class HashTable {
//     constructor(size) {
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key) {
//         let total = 0
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key, value) {
//         const i = this.hash(key)
//         const bucket = this.table[i]

//         if (!bucket) {
//             this.table[i] = [[key, value]]
//         } else {
//             const samekeyItem = bucket.find(item => item[0] === key)
//             if (samekeyItem) {
//                 samekeyItem[1] = value
//             } else {
//                 bucket.push([key, value])
//             }
//         }
//     }

//     get(key) {
//         const i = this.hash(key)
//         const bucket = this.table[i]
//         if (bucket) {
//             const samekeyItem = bucket.find(item => item[0] === key)
//             if (samekeyItem) {
//                 return samekeyItem[1]
//             }
//         }
//         return undefined
//     }

//     remove(key) {
//         const i = this.hash(key)
//         const bucket = this.table[i]
//         if (bucket) {
//             const samekeyItem = bucket.find(item => item[0] === key)
//             if (samekeyItem) {
//                 bucket.splice(bucket.indexOf(samekeyItem), 1)
//             }
//         }
//     }

//     display() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i, ' -> ', this.table[i])
//             }
//         }
//     }
// }
class HashTable {
    constructor(size) {
        this.table = []
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
        const bucket = this.table[i]

        if (!bucket) {
            this.table[i] = [[key, value]]
        } else {
            let samekeyItem = bucket.find(item => item[0] === key)
            if (samekeyItem) samekeyItem[1] = value
            else bucket.push([key, value])
        }
    }

    get(key) {
        const i = this.hash(key)
        const bucket = this.table[i]
        if (bucket) {
            const samekeyItem = bucket.find(item => item[0] === key)
            return samekeyItem[1]
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, ' -> ', this.table[i])
            }
        }
    }
}

const table = new HashTable(10)

table.set('name', 'Kyle')
table.set('age', 25)
table.display()
console.log('\t---')

// table.remove('age')
// table.display()
// console.log('\t---')

table.set('ega', 27)
table.display()