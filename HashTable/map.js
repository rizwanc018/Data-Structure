const m = new Map()
m.set('a', 50)
m.set('b', 20)
console.log(m)

console.log(m.get('b'))

console.log(m.has('c'))

m.set('c', 10)
console.log(m.has('c'))