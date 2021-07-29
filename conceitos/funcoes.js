// Função que retorna o meu nome
function getName() {
  return 'Ranieri Michel Alves Silva'
}

// Função que recebe uma função e printa no console
function logFn(fn) {
  console.log(fn())
}

// Constante recebendo a função
const logFnResult = logFn

// Constante executando função
logFnResult(getName)
