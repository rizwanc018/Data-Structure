class Node {
    constructor() {
        this.children = new Map()
        this.endOfWord = false
    }
}

class PrefixTrie {
    constructor() {
        this.root = new Node()
    }

    insert(word) {
        let node = this.root
        for (let c of word) {
            if (!node.children.has(c)) node.children.set(c, new Node())
            node = node.children.get(c)
        }
        node.endOfWord = true
    }

    search(word) {
        let node = this.root
        for (let c of word) {
            if (!node.children.has(c)) return false
            node = node.children.get(c)
        }
        return node.endOfWord
    }
}