// Retorna o tamanho de uma string
const textSize = 'Texto'.length
console.log(`Quantidade de letras: ${textSize}`)

// Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x')
console.log(
  '\nArray com as posições separadas pelo delimitador: ',
  splittedText
)

// Busca por um valor e substitui por outro
const replacedText = 'Ranieri'.replace('Rani', 'rAnI')
console.log('\nSubsituição de valor: ', replacedText)

// Retorna a "fatia" de um valor
const lastChar = 'Ranieri'.slice(-1)
console.log('\nUltima letra da string Ranieri:', lastChar)

const allWithoutLastChar = 'Ranieri'.slice(0, -1)
console.log(
  '\nValor da string da primeira letra menos a última: ',
  allWithoutLastChar
)

const secondToEnd = 'Ranieri'.slice(1)
console.log('\nValor da string da segunda letra até a última: ', secondToEnd)

//Retorna N caracters a partir de uma posição
const twoCharsAfterFirstPos = 'Ranieri'.substr(1, 2)
console.log(
  '\nAs duas primeiras letras dps da primeira ou seja segunda e terceira letras: ',
  twoCharsAfterFirstPos
)
