class Graph {
  constructor() {
    this.nodesMap = new Map();
  }

  addNode(node) {
    if (!this.nodesMap.has(node)) {
      this.nodesMap.set(node, []);
    }
  }

  addEdge(node1, node2) {
    this.nodesMap.get(node1).push(node2);
    this.nodesMap.get(node2).push(node1);
  }

  // removeEdge(node1, node2) {
  //   this.nodesMap.get(node1).splice(this.nodesMap.get(node1).indexOf(node2), 1);
  //   this.nodesMap.get(node2).splice(this.nodesMap.get(node2).indexOf(node1), 1);
  // }

  // removeNode(node) {
  //   for (let neighbor of this.nodesMap.get(node)) {
  //     this.removeEdge(node, neighbor);
  //   }
  //   this.nodesMap.delete(node);
  // }

  removeEdge(source, target) {
    this.nodes.get(source).splice(this.nodes.get(source).indexOf(target), 1);
  }

  removeNode(key) {
    this.nodes.delete(key);
    for (let [node, edges] of this.nodes) {
      this.nodes.set(node, edges.filter(edge => edge !== key));
    }
  }

  // Depth-first search traversal method
  depthFirstSearch(startNode) {
    const visited = new Set();
    const dfs = (node) => {
      if (!node || visited.has(node)) return;
      console.log(node);
      visited.add(node);
      for (let neighbor of this.nodesMap.get(node)) {
        dfs(neighbor);
      }
    };
    dfs(startNode);
  }

  // Breadth-first search traversal method
  breadthFirstSearch(startNode) {
    const visited = new Set();
    const queue = [startNode];
    visited.add(startNode);
    while (queue.length > 0) {
      const currentNode = queue.shift();
      console.log(currentNode);
      for (let neighbor of this.nodesMap.get(currentNode)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
}

// Usage example
const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

graph.depthFirstSearch("A"); // Output: A, B, D, C
graph.breadthFirstSearch("A"); // Output: A, B, C, D
