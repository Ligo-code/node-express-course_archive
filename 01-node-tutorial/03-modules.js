// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const secret = 'SUPER SECRET' // accessible only in this module
const john = 'john'
const peter = 'peter'

const sayHi = (name) => {
  console.log(`Hello there ${name}`)
}

sayHi('susan') // invoke function
sayHi(john)
sayHi(peter)

/*
const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')
sayHi('susan') // invoke function from 05-utils.js
sayHi(names.john)
sayHi(names.peter)
*/
