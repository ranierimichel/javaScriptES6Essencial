function fn() {
  return 'Code here'
}

const arrowFn = () => 'Code here'
const arrowFn1 = () => {
  // Mais de uma expressão
  return 'Code here'
}

// Funções também são objetos
fn.prop = 'Posso criar propriedades'

console.log(fn())
console.log(fn.prop)

// Receber parâmetros
const logValue = value => console.log(value)
const logFnResult = fnParam => console.log(fnParam())
logValue(fn)
logFnResult(fn)
console.log('-------------------')

// Receber e retornar funções
const controlFnExec = fnParam => allowed => {
  if (allowed) {
    console.log('Executando fnParam')
    fnParam()
  } else {
    console.log('Não executa fnParam')
  }
}

const handleFnExecution = controlFnExec(fn)

handleFnExecution(true) // Executará a função fn
handleFnExecution() // Não executará a função fn

console.log('----------------')

// controlFnExec como função
// function controlFnExec(fnParam) {
//   return function (allowed) {
//     if (allowed) {
//       fnParam()
//     }
//   }
// }
