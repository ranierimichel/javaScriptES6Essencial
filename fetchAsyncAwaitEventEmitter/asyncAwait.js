const { default: fetch } = require('node-fetch')

const asyncTimer = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(12345)
    }, 1000)
  })

// Sequencial
// const simpleFunc = async () => {
//   // throw new Error('Opps...')
//   const data = await asyncTimer()
//   console.log(data)
//   const dataJSON = await fetch(
//     'http://localhost:5500/fetchAsyncAwaitEventEmitter/data.json'
//   ).then(resStream => resStream.json())

//   return dataJSON
// }

// Paralelo
const simpleFunc = async () => {
  // throw new Error('Opps...')
  const data = await Promise.all([
    asyncTimer(),
    fetch('http://localhost:5500/fetchAsyncAwaitEventEmitter/data.json').then(
      resStream => resStream.json()
    )
  ])
  return data
}

simpleFunc()
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })
