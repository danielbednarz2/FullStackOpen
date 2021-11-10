const t = [1, -1, 3]

console.log(t)
t.push(5) //changes original array
const t2 = t.concat(5) //creates new array and doesn't alter original (keeping the data immutable)
console.log(t)
console.log(t2)
console.log(t)
console.log(t.length)
console.log(t[1])

// array methods

t.forEach(value => {
    console.log(value)
})

const m1 = t.map(value => value * 2)
console.log(m1)

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)

// destructuring

const [first, second, ...rest] = t

console.log(first, second)
console.log(rest)