const symbol1 = Symbol()
const symbol2 = Symbol()

// Symbols são únicos
console.log('Symbol1 é igual a symbol2? ', symbol1 === symbol2)

// Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name')
const nameSymbol2 = Symbol('name')

const user2 = {
  [nameSymbol1]: 'Ranieri',
  [nameSymbol2]: 'Michel',
  lastName: 'Alves Silva'
}

console.log(user2)

// Symbols criam propriedades que não são enumerables
for (const key in user2) {
  if (user2.hasOwnProperty(key)) {
    console.log(`\nValor da chave ${key}: ${user2[key]}`)
  }
}

console.log('Propriedades do objeto user2: ', Object.keys(user2))
console.log('Valores das propriedades do objeto user2: ', Object.values(user2))

// Exibir symbols de um objeto
console.log(
  'Symbols registrados no objeto user2',
  Object.getOwnPropertySymbols(user2)
)

// Acessando todas as propriedades do objeto
console.log('Todas as propriedades do objeto user2: ', Reflect.ownKeys(user2))

// Criar um enum
const directions = {
  UP: Symbol('UP'),
  DOWN: Symbol('DOWN'),
  LEFT: Symbol('LEFT'),
  RIGHT: Symbol('RIGHT')
}

console.log(directions)
console.log('-------------------------------')

// Well known symbols
/* Symbol.iterator
   Symbol.split
   Symbol.toStringTag
*/

const arr = [1, 2, 3, 4]

// const it = arr[Symbol.iterator]()

// while (true) {
//   let { value, done } = it.next()

//   if (done) {
//     break
//   }

//   console.log(value)
// }

// Pode agr ser feito com for of

for (let value of arr) {
  console.log(value)
}
console.log('---------ObjIteravel--------------')

// Criando um objeto iteravel
const obj = {
  values: [1, 2, 3, 4],
  // [Symbol.iterator]() {
  //   let i = 0

  //   return {
  //     next: () => {
  //       i++
  //       return {
  //         value: this.values[i - 1],
  //         done: i > this.values.length
  //       }
  //     }
  //   }
  // }
  *[Symbol.iterator]() {
    for (var i = 0; i < this.values.length; i++) {
      yield this.values[i]
    }
  }
}

const it = obj[Symbol.iterator]()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log('-------------------------------')
// Objeto agr é iteravel e pode-se usar spread operator ...
for (let value of obj) {
  console.log(value)
}
console.log('-------------------------------')

// Generators

function* hello() {
  console.log('Hello')
  yield 1
  console.log('from')
  const value = yield 2
  console.log('function')

  console.log(value)
}

const it1 = hello()

console.log(it1.next())
console.log(it1.next())
console.log(it1.next('Outside!'))
console.log('-------------------------------')

// Example
function* naturalNumbers() {
  let number = 0
  while (true) {
    yield number
    number++
  }
}

const it2 = naturalNumbers()

console.log(it2.next())
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())
