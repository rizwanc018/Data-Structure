class Graph{
    constructor() {
        this.graph = {}
    }

    addNode(node) {
        if(!this.graph[node])
            this.graph[node] = []
    }

    addEdge(node,edge) {
        this.addNode(node)
        this.addNode(edge)
        this.graph.push(edge)
    }

    removeEdge(node, edge) {
        this.graph[node].splice(this.graph.indexOf(edge),1)
    }

    removeNode(node) {
        if(this.graph[node])
            delete this.graph[node]

        for(let n in this.graph) {
            this.graph[n] = this.graph[n].filter(edge => edge !== node)
        }
    }

    dfs(node) {
        let v = new Set()
        let s = [node]
        let res = []
        while(s.length > 0) {
            if(!v.has(node)){
                let curr = s.pop()
                if(!v.has(curr)){
                    v.add(curr)
                    res.push(curr)
                    for(let e of this.graph[curr])
                        s.push(e)
                }
            }
        }
        return res
    }

    bfs(node) {
        let n = new Set()
        let q = [node]
        let res = []
        while(q.length > 0) {
            let curr = q.shift()
            if(!n.has(curr)){
                n.add(curr)
                res.push(curr)
                for(let e of this.graph[node])
                    q.push[e]

            }
        }
        return res
    }
}

// class Graph {
//     constructor() {
//         this.map = new Map()
//     }

//     addNode(node) {
//         if (!this.map.has(node))
//             this.map.set(node, [])
//     }

//     addEdge(node, edge) {
//         this.addNode(node)
//         this.addNode(edge)
//         this.map.get(vertex).push(edge)
//     }

//     removeEdge(node, edge) {
//         this.map.get(node).splice(this.map.get(node).indexOf(edge), 1)
//     }
//     removeNode(node) {
//         this.map.delete(node)
//         for (let [v, e] of this.map) {
//             this.map.set(v, e.filter(edge => edge !== node))
//         }
//     }

//     dfs(node) {
//         let v = new Set()
//         let s = [node]
//         let res = []
//         while (s.length > 0) {
//             let curr = s.pop()
//             if (!v.has(curr)) {
//                 res.push(curr)
//                 v.add(curr)
//                 for (let e of this.map.get(curr)) {
//                     s.push(e)
//                 }
//             }
//         }
//         return res
//     }

//     bfs(node) {
//         let v = new Set()
//         let q = [node]
//         let res = []
//         while(q.length > 0) {
//             let curr = q.shift()
//             if(!v.has(curr)){
//                 v.add(curr)
//                 res.push(curr)
//                 for(let e of this.map(curr)) {
//                     q.push(e)
//                 }
//             }
//         }
//         return res
//     }
// }