// something in somethingItems
// Arrays
var arvores = new Array(
  'pau-brasil',
  'loureiro',
  'cedro',
  'carvalho',
  'sicômoro'
)

console.log(0 in arvores)
console.log(3 in arvores)
console.log(6 in arvores)
console.log('cedro' in arvores)
console.log('lenght' in arvores)
console.log('---------------------')

// Objetos predefinidos
console.log('PI' in Math)
var str = new String('coral')
console.log('length' in str)
console.log('---------------------')

// Objetos personalizados
var mycar = {
  marca: 'Honda',
  modelo: 'Accord',
  ano: 1998
}
console.log('marca' in mycar)
console.log('Honda' in mycar)
console.log('---------------------')

// objeto instanceof tipoObjeto

var dia = new Date(2021, 07, 29)
if (dia instanceof Date) {
  console.log(Date.now())
}
