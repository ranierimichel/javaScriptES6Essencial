let user = {
  name: 'Ranieri'
}
console.log(user.name)
// Alterando a propriedade de um objeto
user.name = 'Ranieri1'
console.log(user.name)
user['name'] = 'Ranieri2'
console.log(user.name)

const prop = 'name'
user[prop] = 'Ranieri3'
console.log(user.name)

// Criando uma propriedade
user.lastName = 'Michel Alves Silva'
console.log(user)

// Deletando uma propriedade
delete user.name
console.log(user)

console.log('-------------------------')

const user1 = {
  name: 'Ranieri',
  lastName: 'Michel Alves Silva'
}
// Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user1))

// Recupera os valores das chaves do objeto
console.log(
  '\nValores das propriedades do objeto user1: ',
  Object.values(user1)
)

// Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores: ', Object.entries(user1))

// Mergear propriedades de objetos
Object.assign(user, { fullName: 'Ranieri Michel Alves Silva' })

console.log('\nAdiciona a propriedade fullName no objeto user', user)
console.log(
  '\nRetorna um novo objeto mergeando dois ou mais objetos',
  Object.assign({}, user1, { age: 28 }) // the fisr paramenter {} é para criar um novo objeto
)

// Previne todas as alterações em um objeto
const newObj = { foo: 'bar' }
Object.freeze(newObj)
console.log(newObj)
newObj.foo = 'change'
console.log(newObj)
delete newObj.foo
console.log(newObj)
newObj.bar = 'foo'
console.log(newObj, '\n-------------------')

// Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Ranieri' }
Object.seal(person)
console.log(person)

person.name = 'Ranieri michel'
console.log(person)
delete person.name
console.log(person)
person.age = 26
console.log(person)
