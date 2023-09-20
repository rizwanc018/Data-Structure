class TrieNode {
    constructor() {
        this.children = new Map()
        this.endofWord = false
    }
}

class SuffixTrie{
    constructor() {
        this.root = new TrieNode()
    }

    insertHelper(word){
        let node = this.root
        for(let c of word) {
            if(!node.children.has(c)) node.children.set(c, new TrieNode())
            node = node.children.get(c)
        }
        node.endOfWord = true
    } 

    insert(word) {
        for(let i in word) {
            let suffix = word.slice(i)
            this.insert(suffix)
        }
    }
}