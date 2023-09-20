class Node{
    constructor(){
        this.children = new Map()
        this.endOfWord = false
    }
}

class SuffixTrie{
    constructor(){
        this.root = new Node()
    }

    insert(word) {
        for(let i in word) {
            let suffix = word.slice(i)

        }
    }

    insertHelper(suffix) {
        let node = this.root
        for(let c of word) {
            if(!node.children.has(c)) node.children.set(c, new Node())
            node = node.children.get(c)
        }
        node.endOfWord = true 
    }
}