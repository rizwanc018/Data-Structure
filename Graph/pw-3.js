class Graph{
    constructor() {
        this.graph = {}
    }

    addNode(node) {
        if(!this.graph[node])
            this.graph[node] = []
    }

    addEdge(node, edge, weight) {
        this.addNode(node)
        this.addNode(edge)
        this.graph[node].push({node: edge, weight})
    }

    removeEdge(node, edge) {
        this.graph[node] =this.graph[node].filter(obj => obj.node != edge)
    }
}

const graph = new Graph();
graph.addEdge("A", "B", 6);
graph.addEdge("A", "C", 7) ;
graph.addEdge("B", "D", 3);
graph.addEdge("C", "D", 8);
console.log(JSON.stringify(graph))
graph.removeEdge("A", "B")
console.log(JSON.stringify(graph))
