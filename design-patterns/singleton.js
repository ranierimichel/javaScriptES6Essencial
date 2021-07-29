function Pessoa() {
  if (!Pessoa.instance) {
    Pessoa.instance = this
  }
  return Pessoa.instance
}

const p = Pessoa.call({ name: 'Ranieri' })
const p2 = Pessoa.call({ name: 'Michel' })
console.log(p)
console.log(p2)
