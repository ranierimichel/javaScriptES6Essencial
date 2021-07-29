const frutas = ['melancia', 'banana']
// adiciona no final e retorna o tamanho do array
console.log(frutas.push('laranja'))
console.log(frutas)
// remove o ultimo elemento e retorna o elemento
console.log(frutas.pop())
console.log(frutas)
// adiciona no inicio e retorna o tamanho do array
console.log(frutas.unshift('acerola'))
console.log(frutas)
// remove o primeiro elemento e retorna o elemento
console.log(frutas.shift())
console.log(frutas)

// Concatenando arrays
const salgados = ['coxinha', 'empada', 'kibe']
const alimentos = frutas.concat(salgados)
console.log(alimentos)

// fatiando array
const bananaCoxinha = alimentos.slice(1, 3)
console.log(bananaCoxinha)

// splice exemplo
const arr = [1, 2, 3, 4, 5, 6, 7, 8]
arr.splice(2)
console.log(arr)
arr.splice(0, 0, 'first')
console.log(arr)
arr.splice(0, 1, 'second', 'teste')
console.log(arr)
console.log('---------------------')

// transformando array em string
console.log(arr.join('-'))
