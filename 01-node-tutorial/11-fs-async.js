// Time consuming asynchronous file system operations do not block the event loop, 
// allowing other operations to execute concurrently. 
// This is particularly beneficial in a server environment where multiple requests 
// need to be handled simultaneously.

const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => { //callback function 
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
})
console.log('starting next task')
  
  /*to avoid callback hell, use functions or promises
  
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')
*/
