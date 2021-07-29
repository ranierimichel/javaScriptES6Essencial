const arr = [1, 2, 3, 4, 5]
arr.forEach((value, index) => {
  console.log(`${index}: ${value}`)
})
console.log('----------------------')

// map retorna um novo array
arr1 = arr.map(value => value * 2)
console.log(arr1)
console.log('------------------------')

// flat tira items de arrays dentro de arryas
numbers = [1, 2, [3, 4, 5, [6, 7, 8, [9, 10]]]]
console.log(numbers)
console.log(numbers.flat())
console.log(numbers.flat(3))
console.log('------------------------')

numbers1 = [1, 2, 3, 4]
console.log(arr.flatMap(value => [value * 2]))
console.log(arr.flatMap(value => [[value * 2]]))
console.log('------------------------')

// keys
const arrIterator = arr.keys()
console.log(arrIterator.next())
console.log(arrIterator.next())
console.log(arrIterator.next())
console.log('------------------------')

// values
const text = ['a', 'b', 'c', 'd']
const arrIteratorText = text.values()
console.log(arrIteratorText.next())
console.log(arrIteratorText.next())
console.log(arrIteratorText.next())
console.log('------------------------')

// entries
const arrIteratorEntries = text.entries()
console.log(arrIteratorEntries.next())
console.log(arrIteratorEntries.next())
console.log(arrIteratorEntries.next())
console.log('------------------------')
