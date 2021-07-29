// hoisting-variavel
// neste exemplo a variavel text é criada dps do primeiro log, msm assim n da erro pois a variavel e criada antes mas n atribuida
function foo() {
  console.log(text)

  var text = 'Example'

  console.log(text)
}
foo()

// hoisting-função
// aqui a função escrita dps mas n da erro pois a função e criada antes
function foo1() {
  log('Hoisting de função')

  function log(value) {
    console.log(value)
  }
}

foo1()
