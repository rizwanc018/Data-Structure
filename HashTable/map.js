const m = new Map()
m.set('ab', 50)
m.set('ba', 20)
console.log(m)

console.log(m.get('ab'))

console.log(m.has('c'))

m.set('c', 10)
console.log(m.has('c'))