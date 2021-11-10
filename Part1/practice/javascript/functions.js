// arrow functions

const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

const result = sum(1, 5)
console.log(result)

const square = p => {
    console.log(p)
    return p * p
}

const squareShort = p => p * p //if only 1 line of expression there is no need for braces or to return anything

const result1 = square(5)
const result2 = squareShort(5)

console.log(result1)
console.log(result2)

function product(a, b) {
    return a * b
}

const productExpression = function(a, b) {
    return a * b
}

const productArrow = (a, b) => a * b

const result3 = product(2, 6)
const result4 = productArrow(2, 6)
const result5 = productExpression(2, 6)

console.log(result3)
console.log(result4)
console.log(result5)