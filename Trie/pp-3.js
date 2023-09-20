class TrieNode{
    constructor() {
        this.children = new Map()
        this.endOfWord = false
    }
}

class PrefixTrie{
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let node = this.root
        for(let char of word) {
            if(!node.children.has(char))
                node.children.set(char, new TrieNode())
            node = node.children.get(char)
        }
        node.endofWord = true
    }

    search(word) {
        let node = this.root
        for(let char of word) {
            if(!node.children.has(char)) return false
            node = node.children.get(char)
        }
        return node.endofWord
    }
}

const trie = new PrefixTrie();
trie.insert("apple");
trie.insert("banana");
console.log(trie.search("apple"));  // Output: true
console.log(trie.search("banana")); // Output: true
console.log(trie.search("orange")); // Output: false