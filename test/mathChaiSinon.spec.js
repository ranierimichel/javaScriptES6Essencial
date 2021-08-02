// const assert = require('assert')
const Math = require('../testes/math.js')
const expect = require('chai').expect
const sinon = require('sinon')

let value = 0
describe('Math class', function () {
  //Hooks before, beforeEach, after, afterEach
  beforeEach(function () {
    value = 0
  })

  it('Sum two numbers', function () {
    const math = new Math()

    math.sum(value, 5, value => {
      expect(value).to.equal(5)
    })

    // assert.equal(math.sum(5, 5), 10)
  })

  // done usar quando async
  it('Subtract second number of first number', function (done) {
    const math = new Math()
    // timeout maximo 2000ms, usar this.timeout() para setar o timeout desejado
    this.timeout(3000)

    value = 5

    // math.minus(10, value, value => {
    //   assert.equal(value, 5)
    //  done()
    //})

    math.minus(10, value, value => {
      expect(value).to.equal(5)
      done()
    })
  })
  // pode escrever testes que ainda n existem
  it('Divide two numbers')
  // executar soment um test use .only
  // deixar de executar um test use .skip
  it('Multiply two numbers', function () {
    const math = new Math()
    // teste validando objeto
    const obj = {
      name: 'Ranieri Michel'
    }
    const obj2 = {
      name: 'Ranieri Michel'
    }
    const obj3 = obj
    // testando se tem uma propriedade
    expect(obj).to.have.property('name')
    // testando o valor da propriedade
    expect(obj).to.have.property('name').equal('Ranieri Michel')
    // Comparando 2 objetos
    expect(obj).to.equal(obj3)
    // Comparando valores 2 objetos diferentes
    expect(obj).to.deep.equal(obj2)

    // assert.equal(math.multiply(value, 5), 25)
    math.multiply(value, 5, value => {
      expect(value).to.equal(0)
    })
  })

  // Usando sinon para mocha objetos
  it.only('Calls res with sum and index values', function () {
    const req = {}
    const res = {
      load: function load() {
        console.log('called!')
      }
    }

    // sinon.spy(res, 'load')

    //substituindo methodo e dando um retorno expecializado
    sinon.stub(res, 'load').returns('xpto')

    const math = new Math()

    math.printSum(req, res, 5, 5)

    // Verificando se foi chamado somente uma vez
    expect(res.load.calledOnce).to.be.true
    // Verificando argumentos
    expect(res.load.args[0][0]).to.equal('index')
    expect(res.load.args[0][1]).to.equal(10)
  })
})
