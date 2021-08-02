const fetch = require('node-fetch')

// fetch('http://localhost:5500/fetchAsyncAwaitEventEmitter/data.json').then(
//   responseStream => {
//     console.log(responseStream)
//   }
// )

// Log dados de data
// fetch('http://localhost:5500/fetchAsyncAwaitEventEmitter/data.json').then(
//   responseStream => {
//     responseStream.json().then(data => {
//       console.log(data)
//     })
//   }
// )

fetch('http://localhost:5500/fetchAsyncAwaitEventEmitter/data.json')
  .then(responseStream => {
    if (responseStream.status === 200) {
      return responseStream.json()
    } else {
      throw new Error('Request error')
    }
  })
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log('Error: ', err) // Somente se for erro de rede
  })
