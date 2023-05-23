class Graph {
    constructor() {
        this.nodesMap = new Map()
    }

    addNode(node) {
        if (!this.nodesMap.has(node))
            this.nodesMap.set(node, [])
    }

    addEdge(node1, node2, biDir = false) {
        if (!this.nodesMap.has(node1))
            this.addNode(node1)
        if (!this.nodesMap.has(node2))
            this.addNode(node2)
        this.nodesMap.get(node1).push(node2)
        if (biDir)
            this.nodesMap.get(node2).push(node1)
    }

    removeEdge(node1, node2) {
        if (this.nodesMap.has(node1))
            this.nodesMap.get(node1).splice(this.nodesMap.get(node1).indexOf(node2), 1)
    }

    removeNode(target) {
        this.nodesMap.delete(target)
        for (let [node, edges] of this.nodesMap) {
            this.nodesMap.set(node, edges.filter(edge => edge !== target))
        }
    }

    display() {
        for (let [node, neighbors] of this.nodesMap)
            console.log(`${node} -> ${neighbors.join(',')}`);
    }

    depthFirstSearch(node1) {
        const visited = new Set()
        let res = []

        const dfs = node => {
            if (!node || visited.has(node)) return
            res.push(node)
            visited.add(node)
            for (let neighbor of this.nodesMap.get(node))
                dfs(neighbor)
        }
        dfs(node1)
        return res
    }

    breadthFirstSearch(node1) {
        const visited = new Set()
        let res = []
        const queue = [node1]
        visited.add(node1)
        while (queue.length > 0) {
            let curr = queue.shift()
            res.push(curr)
            for (let neighbor of this.nodesMap.get(curr)) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
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
graph.display();
console.log()
graph.removeNode('D')
graph.display();
console.log(graph.depthFirstSearch('A'))
console.log(graph.breadthFirstSearch('A'))

