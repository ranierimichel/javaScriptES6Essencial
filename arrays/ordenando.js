// sort ordena arrays
students = [
  { name: 'Ranieri', grade: 10 },
  { name: 'Lara', grade: 7 },
  { name: 'Antonia', grade: 1 }
]
// menor para maior
console.log(students.sort((current, next) => current.grade - next.grade))
// maior para menor
console.log(students.sort((current, next) => next.grade - current.grade))
console.log('------------------------')

// revertendo array
numbers = [1, 2, 3, 10, 8, 7, 6]
console.log(numbers.reverse())

// reduce, o primeiro argumento é o retorno, ultimo argumento é o startvalue
console.log(numbers.reduce((total, value) => (total += value), 0))
