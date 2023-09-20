class Node{
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BST{
    constructor() {
        this.root = null
    }

    insert(data) {
        let node = new Node(data)
        if(!this.root) {
            this.root = node
        } else {
            this.insertHelper(this.root, node)
        }
    }

    insertHelper(root, node) {
        if(node.data < root.data){
            if(!root.left) root.left = node
            else this.insertHelper(root.left, node)
        } else if(node.data > root.data) {
            if(!root.right) root.right = node
            else this.insertHelper(root.right, node)
        }
    } 
}

let bst = new BST
bst.insert(8)
bst.insert(3)
bst.insert(11)
bst.insert(10)

console.log(JSON.stringify(bst))


// Closure
const outer = () => {
    let x  = 100
    const inner = () => {
        console.log(x)
    }
    return inner
}

const closure = outer()
closure()

// Currying
const add = a => {
    return b => {
        return a+b
    }
}
const add5 = add(5)
console.log(add5(3));

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

const memoizeFactorial = (function () {
    const cache = {};
  
    return function (n) {
      if (n in cache) {
        console.log(`Fetching factorial(${n}) from cache.`);
        return cache[n];
      } else {
        console.log(`Calculating factorial(${n}).`);
        if (n === 0 || n === 1) {
          return 1;
        } else {
          const result = n * memoizeFactorial(n - 1);
          cache[n] = result;
          return result;
        }
      }
    };
  })();
  
  console.log(memoizeFactorial(5)); // Calculate factorial(5)
  console.log(memoizeFactorial(3)); // Fetch factorial(3) from cache
  console.log(memoizeFactorial(5)); // Fetch factorial(5) from cache
  
  
  /// Call 
// function greet(name) {
//     console.log(`Call ${name} and ${this.name}`)
// }
// const person = {name :'Kyle'}
// greet.call(person, 'noone')

// const bindtst = greet.bind(person, "bindi")
// bindtst()
  
  
(function () {
    console.log('IIFEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE')
})()