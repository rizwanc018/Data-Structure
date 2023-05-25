class Graph {
    constructor() {
        this.vertexMap = new Map()
    }

    addVertex(vertex) {
        if (!this.vertexMap.has(vertex)) {
            this.vertexMap.set(vertex, [])
        }
    }

    addEdge(vertex, edge, biDir = false) {
        if (!this.vertexMap.has(vertex)) this.addVertex(vertex)
        if (!this.vertexMap.has(edge)) this.addVertex(edge)
        this.vertexMap.get(vertex).push(edge)
        if (biDir) this.vertexMap.get(edge).push(vertex)
    }

    removeEdge(vertex, edge) {
        if (this.vertexMap.has(vertex))
            this.vertexMap.get(vertex).splice(this.vertexMap.get(vertex).indexOf(edge), 1)
    }

    removeVertex(vertex) {
        if (this.vertexMap.has(vertex)) {
            this.vertexMap.delete(vertex)
            for (let [v, e] of this.vertexMap)
                this.vertexMap.set(v, e.filter(edge => edge !== vertex))
        }
    }

    display() {
        for (let [vertex, edge] of this.vertexMap)
            console.log(vertex, ' -> ', edge)
    }
    
    depthFirstSearch(vertex) {
        const visited = new Set()
        let result = []
        let s = [vertex]
        while (s.length > 0) {
            let curr = s.pop()
            if (!visited.has(curr)) {
                result.push(curr)
                visited.add(curr)
                for (let edge of this.vertexMap.get(curr))
                    s.push(edge)
            }
        }
        return result
    }

    breadthFirstSearch(vertex) {
        let visited = new Set()
        let q = [vertex]
        let result = []
        while (q.length > 0) {
            let curr = q.shift()
            if (!visited.has(curr)) {
                result.push(curr)
                visited.add(curr)
                for (let edge of this.vertexMap.get(curr))
                    q.push(edge)
            }
        }
        return result
    }
}

const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D", true);
graph.addEdge("C", "D", true);
graph.addEdge("F", "B", true);
graph.display();
console.log()
// graph.removeVertex('D')
// graph.removeEdge('B', 'F')
// graph.display();
console.log(graph.depthFirstSearch('A'))
console.log(graph.dfsQ('A'))
console.log(graph.breadthFirstSearch('A'))
