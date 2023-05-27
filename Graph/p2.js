class Graph {
    constructor() {
        this.map = new Map()
    }

    addVertex(vertex) {
        if (!this.map.has(vertex))
            this.map.set(vertex, [])
    }

    addEdge(vertex, edge, bidir = false) {
        this.addVertex(vertex)
        this.addVertex(edge)
        this.map.get(vertex).push(edge)
        if (bidir) this.map.get(edge).push(vertex)
    }

    removeEdge(vertex, edge) {
        this.map.get(vertex).splice(this.map.get(vertex).indexOf(edge), 1)
    }

    removeVertex(vertex) {
        this.map.delete(vertex)
        for (let [v, e] of this.map) {
            this.map.set(v, e.filter(edge => edge !== vertex))
        }
    }

    display() {
        for (let [n, v] of this.map)
            console.log(`${n} -> ${v.join(',')}`);

    }

    dfs(vertex) {
        const v = new Set()
        const s = [vertex]
        const res = []
        while (s.length > 0) {
            let curr = s.pop()
            if (!v.has(curr)) {
                res.push(curr)
                v.add(curr)
                for (let e of this.map.get(curr))
                    s.push(e)
            }
        }
        return res
    }

    bfs(vertex) {
        const v = new Set()
        let q = [vertex]
        let res = []
        while (q.length > 0) {
            let curr = q.shift()
            if (!v.has(curr)) {
                v.add(curr)
                res.push(curr)
                for (let e of this.map.get(curr))
                    q.push(e)
            }
        }
        return res
    }
}

const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D", true);
graph.addEdge("C", "D", true);
graph.addEdge("F", "B", true);
// graph.display();
// console.log()
// graph.removeVertex('D')
// graph.display();
console.log(graph.dfs('A'))
// console.log(graph.bfs('A'))
