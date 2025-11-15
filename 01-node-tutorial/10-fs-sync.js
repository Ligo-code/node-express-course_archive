// Time consuming synchronous file system operations block the event loop, 
// preventing other operations from executing until the current one completes. 
// This can lead to performance issues, especially in a server environment where multiple requests 
// need to be handled concurrently.
const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')
