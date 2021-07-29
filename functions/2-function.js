this.name = 'Nome no contexto de criação'

const getNameArrowFn = () => this.name // arrow function pega o this to contexto de criação

function getName() {
  // function pega o this de onde ela é executada
  return this.name
}

const user = {
  name: 'Nome no objeto de execução',
  getNameArrowFn,
  getName
}

console.log('This.name = ', this.name)
console.log('Calling function getNameArrowFn = ', getNameArrowFn())
console.log('Calling function getName = ', getName())
console.log('Calling user.name = ', user.name)
console.log('Calling getNameArrowFn in user = ', user.getNameArrowFn())
console.log('Calling user.getName = ', user.getName())
