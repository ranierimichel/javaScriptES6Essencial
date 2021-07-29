function Pessoa(customPorperties) {
  return {
    name: 'teste',
    lastName: 'Silva',
    ...customPorperties
  }
}

const p = Pessoa({ name: 'Ranieri', age: 28 })
console.log(p)
