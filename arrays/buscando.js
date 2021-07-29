// find
const numbers = [1, 2, 3, 3, 3, 3, 4, 5]
const firstGreaterThanTwo = numbers.find(value => value > 2)
console.log(firstGreaterThanTwo)
console.log('----------------------')

// findIndex
const firstIndexGreaterThanTwo = numbers.findIndex(value => value > 2)
console.log(firstIndexGreaterThanTwo)
console.log('----------------------')

// filter
const allValuesGreaterThanTwo = numbers.filter(value => value > 2)
console.log(allValuesGreaterThanTwo)
console.log('----------------------')

// indexOf
const firstIndexOfItem = numbers.indexOf(3)
console.log(firstIndexOfItem)
console.log('----------------------')

// lastIndexOf
const lasIndexOfItem = numbers.lastIndexOf(3)
console.log(lasIndexOfItem)
console.log('----------------------')

// includes verificar se um item ta no array
console.log(numbers.includes(3))
console.log(numbers.includes(2))
console.log(numbers.includes(20))
console.log('----------------------')

// some retorna true se pelo menos um item satisfaz a condição
console.log(numbers.some(value => value % 2 === 0))
console.log(numbers.some(value => value % 9 === 0))
console.log('----------------------')

// every retorna true se todos satisfazem a condição
numbers1 = [2, 4, 6, 8]
console.log(numbers.every(value => value % 2 === 0))
console.log(numbers1.every(value => value % 2 === 0))
console.log('----------------------')
