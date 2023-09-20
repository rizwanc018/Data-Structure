class Graph {
    constructor() {
        this.graph = {}
    }

    addNode(data) {
        if (!this.graph[data])
            this.graph[data] = []
    }

    addEdge(node, edge) {
        this.addNode(node)
        this.addNode(edge)
        this.graph[node].push(edge)
    }

    removeEdge(node, edge) {
        this.graph[node].splice(this.graph[node].indexOf(edge), 1)
    }

    removeNode(node) {
        delete this.graph[node]
        for (let v in this.graph) {
            this.removeEdge(v, node)
        }
    }

    dfs(node) {
        let v = new Set()
        let s = [node]
        let res = []
        while(s.length > 0) {
            let curr = s.pop()
            if(!v.has(curr)){
                v.add(curr)
                res.push(curr)
                for(let e of this.graph[curr]){
                    s.push(curr)
                }
            }
        }
        return res
    }

    bfs(node) {
        let v = new Set()
        let q = [node]
        let res = []
        while(q.length > 0) {
            let curr = q.shift()
            if(!v.has(curr)){
                v.add(curr)
                res.push(curr)
                for(let e of this.graph[curr]){
                    q.push(e)
                }
            }
        }
        return res
    }
}

const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
console.log(graph)

// console.log(graph.root)
console.log(graph.bfs('A'))
console.log(graph.dfs('A'))


