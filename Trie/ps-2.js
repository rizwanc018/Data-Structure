class TrieNode {
    constructor() {
        this.children = new Map()
        this.endOfWord = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insertHelper(suffix) {
        let node = this.root
        for (let i = 0; i < suffix.length; i++) {
            if (!node.children.has(suffix[i])) {
                node.children.set(suffix[i], new TrieNode())
            }
            node = node.children.get(suffix[i])
        }
        node.isEndOfWord = true
    }

    insert(word) {
        for (let i = 0; i < word.length; i++) {
            let suffix = word.slice(0)
            this.insertHelper(suffix)
        }
    }

    search(word) {
        let node = this.root
        for (let i = 0; i < word.length; i++) {
            if(!node.children.has(word[i])){
                return false
            }
            node = node.children.get(word[i])
        }
        return node.endOfWord
    }
}