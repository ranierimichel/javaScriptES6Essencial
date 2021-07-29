let nome = 'default'

function getName() {
  return nome
}

function setName(newName) {
  nome = newName
}

module.exports = {
  getName,
  setName
}
