const assert = require('assert')
const Math = require('../testes/math.js')

let value = 0
describe('Math class', function () {
  //Hooks before, beforeEach, after, afterEach
  beforeEach(function () {
    value = 0
  })

  it('Sum two numbers', function () {
    const math = new Math()

    assert.equal(math.sum(5, 5), 10)
  })
  // done usar quando async
  it('Subtract second number of first number', function (done) {
    const math = new Math()
    // timeout maximo 2000ms, usar this.timeout() para setar o timeout desejado
    this.timeout(3000)

    value = 5

    math.minus(10, value, value => {
      assert.equal(value, 5)
      done()
    })
  })
  // pode escrever testes que ainda n existem
  it('Divide two numbers')
  // executar soment um test use .only
  // deixar de executar um test use .skip
  it('Multiply two numbers', function () {
    const math = new Math()

    assert.equal(math.multiply(value, 5), 25)
  })
})
