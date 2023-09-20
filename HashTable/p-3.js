class HashTable{
    constructor(size) {
        this.table = []
        this.size = size
    }

    hash(key) {
        let total
        for(let i in key) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value) {
        let i = this.hash(key)
        let bucket = this.table[i]
        if(bucket) {
            let samekeyItem = bucket.find(item => item[0] === key)
            if(samekeyItem) samekeyItem[1] = value
            else bucket.push([key,value])
        }else {
            this.table[i] = [[key, value]]
        }
    }


    delete(key) {
        let i = this.hash(key)
        let bucket = this.table[i]
        if(bucket) {
            let samekeyItem = bucket.find(item => item[1] === key)
            if(samekeyItem) bucket.splice(bucket.indexOf(samekeyItem), 1)
        }
    }

    display() {
        console.log(this.table)
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, ' -> ', this.table[i])
            }
        }
    }

}

const ht = new HashTable(10)
ht.set('age', 20)
ht.set('name', 'kyle')
ht.display()
// ht.get('age')