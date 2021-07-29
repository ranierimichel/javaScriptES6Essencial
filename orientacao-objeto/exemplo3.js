function Animal(qtdPatas) {
  this.qtdePatas = qtdPatas
}

function Cachorro(morde) {
  Animal.call(this, 4)
  this.morde = morde
}

const pug = new Cachorro(false)
console.log(pug)

// using class
class Animal1 {
  constructor(qtdPatas) {
    this.qtdPatas = 2
  }
}

class Galinha extends Animal {
  constructor(cisca) {
    super(2)
    this.cisca = cisca
  }
}

const gal = new Galinha(true)

console.log(gal)
