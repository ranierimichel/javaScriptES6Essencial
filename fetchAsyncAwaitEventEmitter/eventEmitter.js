const EventEmitter = require('events')

class Users extends EventEmitter {
  userLogged(data) {
    this.emit('User logged', data)
  }
}

const users = new Users()

users.on('User logged', data => {
  console.log(data)
})
// Logar somente o primeiro
// users.once('User logged', data => {
//   console.log(data)
// })

users.userLogged({ user: 'Ranieri Michel' })
users.userLogged({ user: 'Lara Silva' })
