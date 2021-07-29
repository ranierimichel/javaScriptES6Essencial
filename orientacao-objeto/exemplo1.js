const myText = 'Hello prototype!'

console.log(myText.split('')) // de ond vem o split?

// A função construtora string carrega o prototype com a função split
const myText1 = String('Hello prototype!1')
console.log(String.prototype.split)
console.log(myText1.__proto__.split)
console.log(myText.__proto__.split === String.prototype.split)
console.log(myText.constructor === String)
