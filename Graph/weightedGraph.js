class WeightedGraph {
    constructor() {
      this.graph = {};
    }
  
    addVertex(vertex) {
      if (!this.graph[vertex]) {
        this.graph[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2, weight) {
      if (!this.graph[vertex1] || !this.graph[vertex2]) {
        throw new Error("Both vertices must exist in the graph");
      }
  
      this.graph[vertex1].push({ node: vertex2, weight });
      this.graph[vertex2].push({ node: vertex1, weight }); // If the graph is undirected
    }
  
    printGraph() {
      for (const vertex in this.graph) {
        const neighbors = this.graph[vertex].map((edge) => `${edge.node}(${edge.weight})`);
        console.log(`${vertex} => ${neighbors.join(", ")}`);
      }
    }
  }
  
  // Example usage
  const graph = new WeightedGraph();
  
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  
  graph.addEdge("A", "B", 2);
  graph.addEdge("A", "C", 3);
  graph.addEdge("B", "C", 1);
  graph.printGraph();
  