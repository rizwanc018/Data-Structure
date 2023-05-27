class TrieNode {
    constructor() {
        this.children = new Map()
        this.endOfWord = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        for(let i = 0; i < word.length; i++){
            let suffix = word.slice(i)
            this.insertSuffix(suffix)
        }
    }

    insertSuffix(word){
        let node = this.root
        for(let i = 0; i < word.length; i++) {
            if(!node.children.has(word[i]))
                node.children.set(word[i], new TrieNode())
            node = node.children.get(word[i])
        }
        node.endOfWord = true
    }
    
    endsWith(word) {
        let node = this.root
        for(let i = 0; i < word.length; i++) {
            if(!node.children.has(word[i])) return false
            node = node.children.get(word[i])
        }
        return node.endOfWord
    }
}

const suffixTrie = new Trie();
suffixTrie.insert("apple");
suffixTrie.insert("banana");
console.log(suffixTrie.endsWith("ple"));  // Output: true
console.log(suffixTrie.endsWith("ana"));  // Output: true
