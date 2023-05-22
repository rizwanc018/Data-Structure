class TrieNode {
    constructor() {
        this.children = new Map()
        this.isEndOfWord = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let node = this.root
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if (!node.children.has(char))
                node.children.set(char, new TrieNode())
            node = node.children.get(char)
        }
        node.isEndOfWord = true
    }
    search(word) {
        let node = this.root
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if (!node.children.has(char))
                return false
            node = node.children.get(char)
        }
        return node.isEndOfWord
    }

    startsWith(word) {
        let node = this.root
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if (!node.children.has(char))
                return false
            node = node.children.get(char)
        }
        return true
    }
}

// Example usage
const trie = new Trie();
trie.insert("apple");
trie.insert("banana");
console.log(trie.search("apple"));  // Output: true
console.log(trie.search("banana")); // Output: true
console.log(trie.search("orange")); // Output: false
console.log(trie.startsWith("app")); // Output: true
console.log(trie.startsWith("ora")); // Output: false