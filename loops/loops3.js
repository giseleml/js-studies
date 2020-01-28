// Filtering an array

const numbers = [0, 86, 4, 654, -15, 18, 1, 561, 1256, 48487, 23, 21, 5, 546, 321, 24]

const odd = numbers.filter(num => num % 2 !== 0)
const even = numbers.filter(num => num % 2 === 0)

console.log('odd numbers in array', odd)
console.log('even numbers in array', even)

// filter() creates a new array with all elements that passed on the test in the function