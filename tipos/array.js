const users = ['Ranieri', 'Lara', 'Antonia']

const gender = {
  MAN: Symbol('M'),
  WOMAM: Symbol('W')
}

const persons = [
  {
    name: 'Ranieri',
    age: 28,
    gender: gender.MAN
  },
  {
    name: 'Lara',
    age: 24,
    gender: gender.WOMAM
  },
  {
    name: 'Antonia',
    age: 1,
    gender: gender.WOMAM
  }
]

// Retornar a quantidade de itens de um array
console.log('Items: ', persons.length)

// Verificar se é array
console.log('A variável persons é um array? ', Array.isArray(persons))

// Iterar os itens do array
persons.forEach((person, index, arr) => {
  console.log(`Nome: ${person.name} index: ${index}`, arr)
})

// Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN)
console.log('\nNova lista apenas com homens: ', mens)

// Retornar um novo
const personWithCourse = persons.map(person => {
  person.course = 'Introduão ao Javascript'
  return person
})

console.log('\nPessoas com a adição do course:', personWithCourse)

// Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
  age += person.age
  return age
}, 0) // 0 é o valo inicial de age

console.log('\nSoma de idade das pessoas', totalAge)

// Juntando operações
const totalEvenAges = persons
  .filter(person => person.age % 2 === 0)
  .reduce((age, person) => {
    age += person.age
    return age
  }, 0)

console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges)
