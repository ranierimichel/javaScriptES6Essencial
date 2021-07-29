function Animal() {}

Animal.prototype.qtdPatas = 0
Animal.prototype.movimentar = function () {}

function Cachorro(morde) {
  this.qtdPatas = 4
  this.morde = morde
}

Cachorro.prototype = Object.create(Animal)
Cachorro.prototype.latir = function () {
  console.log('Au! au!')
}

const pug = new Cachorro(false)
const pitbull = new Cachorro(true)

console.log(pug)
console.log(pitbull)
console.log('-------------')

// com classe

class Animal1 {
  constructor() {
    this.qtdPatas = 0
  }
  movimentar() {}
}

class Cachorro1 extends Animal1 {
  constructor(morde) {
    super()
    this.qtdPatas = 4
    this.morde = morde
  }

  latir() {
    console.log('Au! au!')
  }
}

const dog = new Cachorro1(false)
const dog1 = new Cachorro1(true)

console.log(dog)
console.log(dog1)
