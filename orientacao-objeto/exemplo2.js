function Animal() {
  this.qtdePatas = 4
}
const cachorro = new Animal()
console.log(cachorro.qtdePatas)
console.log(cachorro.__proto__ === Animal.prototype)
console.log(Animal.__proto__ === Function.prototype)

/* new Foo(...)
O que ocorre?

1 - Um novo objeto é criado, herdando Foo.prototype
2 - A função contrutora Foo é chamada com os argumentos especificados e com o 'this' vinculado ao novo objeto criado.
3 - Caso a funão construtora tenha um retorno explícito, será respeitado o seu 'return'. Senão, será retornado o objeto criado no passo 1.
*/
