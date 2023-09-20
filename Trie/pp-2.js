class TrieNode {
    constructor() {
        this.children = new Map()
        this.endofWord = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let node = this.root
        for (let i = 0; i < word.length; i++) {
            if (!node.children.has(word[i]))
                node.children.set(word[i], new TrieNode())
            node = node.children.get(word[i])
        }
        node.isEndOfWord = true
    }

    search(word) {
        let node = this.root
        for (let i = 0; i < word.length; i++) {
            if (!node.children.has(word[i])) return false
            node = node.children.get(word[i])
        }
        return node.isEndOfWord
    }
}