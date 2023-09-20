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
        node.endOfWord = true
    }

    search(word) {
        let node = this.root
        for (let i = 0; i < word.length; i++) {
            if (!node.children.has(word[i])) return false
            node = node.children.get(word[i])
        }
        return node.endOfWord
    }
    startWith(word) {
        let node = this.root
        for (let i = 0; i < word.length; i++) {
            if (!node.children.has(word[i])) return false
            node = node.children.get(word[i])
        }
        return true
    }



    delete(word) {
        this.deleteHelper(this.root, word, 0)
    }

    deleteHelper(node, word, i) {
        if (i === word.length) {
            if(!node.endofWord) return false
            return node.children.size === 0
        }

        let child = node.children.get(word[i])
        let deleteChild = this.delete(child, word, i+1)
        if(deleteChild) {
            node.children.delete(child)
            return node.children.size === 0 && !node.endofWord 
        }
        return false
    }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("banana");
console.log(trie)
// console.log(trie.search("apple"));  // Output: true
// console.log(trie.search("banana")); // Output: true
// console.log(trie.search("orange")); // Output: false
console.log(trie.startWith("app")); // Output: true
console.log(trie.startWith("ora")); // Output: false