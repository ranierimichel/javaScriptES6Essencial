// Função que retorna outras funções
function init() {
  const exemplo = 1
  const exemplo1 = 2
  const exemplo2 = 3

  return function () {
    console.log(`1 - valor de exemplo: ${exemplo}`)

    return function () {
      console.log(`2 - valor de exemplo: ${exemplo1}`)

      return function () {
        console.log(`3 - valor de exemplo: ${exemplo2}`)
      }
    }
  }
}

// recebendo a primieira função
const initFn1 = init()

// executando função
initFn1()

// recebendo segunda função
const initFn2 = initFn1()

// recebendo terceira função
const initFn3 = initFn2()

// executando todas as funções
initFn3()

// isso é estranho más funciona
init()()()
