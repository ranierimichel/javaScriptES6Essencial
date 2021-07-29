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
