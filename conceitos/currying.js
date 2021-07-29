// Função recebe dois parametros e retorna a soma dos mesmos
function soma(a, b) {
  return a + b
}

console.log(soma(2, 2))
console.log(soma(2, 3))
console.log(soma(2, 4))
console.log(soma(2, 5))
console.log('-------------')

// Função recebe um paramentro que posteriormente ficara fixo
function soma1(a) {
  console.log(a)
  return function (b) {
    console.log('-' + b)
    return a + b
  }
}
// fixando paramentro a = 2
const soma2 = soma1(2)

// chamando a função passando o paramentro b
console.log(soma2(2))
console.log(soma2(3))
console.log(soma2(4))
console.log(soma2(5))
