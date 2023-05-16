class HashTable {
    constructor(size) {
        this.table = new Array(size)
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
        this.table[i] = value
    }

    get(key) {
        const i = this.hash(key)
        return this.table[i]
    }

    remove(key) {
        const i = this.hash(key)
        this.table[i] = undefined
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

table.set('name', 'Rizwan')
table.set('job', 'Tech Lead')
table.display()
console.log('\t---')

table.remove('job')
table.display()
console.log('\t---')

table.set('job', 'CTO')
table.display()