class Graph{
    constructor(){
        this.graph = {}
    }

    addNode(node) {
        if(this.graph[node])
            this.graph[node] = []
    }

    addEdge(node, edge, weight) {
        this.addNode(node)
        this.addNode(edge)
        
        this.graph[node].push({node:edge, weight})
        this.graph[edge].push({node:node, weight})

    }
}