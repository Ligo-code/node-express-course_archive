const http = require('http')

// callback function
const server = http.createServer((req, res) => {
  res.write('Welcome to our home page')
  res.end()
})

server.listen(5001)
console.log('Server is listening on port 5001')
/* 
console.log('Welcome to Node Tutorial')
const names = require('./04-names')
console.log(names)
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
console.log(data)
require('./07-mind-grenade')

sayHi('susan') // invoke function from 05-utils.js
sayHi(names.john)
sayHi(names.peter)
*/