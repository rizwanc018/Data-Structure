class TrieNode {
    constructor() {
        this.children = new Map()
        this.isEndOfWord = false
    }
}

class SuffixTrie {
    constructor() {
        this.root = new TrieNode()
    }


    insert(word) {
        let node = this.root
        for (let i = 0; i < word.length; i++) {
            for (let j = i; j < word.length; j++) {
                let char = word[j]
                if (!node.children.has(char))
                    node.children.set(char, new TrieNode())
                node = node.children.get(char)
            }
            node.isEndOfWord = true
            node = this.root
        }
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

    endsWith(word) {
        let node = this.root
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if (!node.children.has(char))
                return false
            node = node.children.get(char)
        }
        return node.isEndOfWord
    }

}

const suffixTrie = new SuffixTrie();
suffixTrie.insert("apple");
suffixTrie.insert("banana");
console.log(suffixTrie.search("appl"));  // Output: false
console.log(suffixTrie.search("banan")); // Output: false
console.log(suffixTrie.search("ple"));    // Output: true
console.log(suffixTrie.search("ana"));    // Output: true
console.log(suffixTrie.endsWith("ple"));  // Output: true
console.log(suffixTrie.endsWith("ana"));  // Output: true
