const http = require('http')

// callback function
const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.end('Welcome to our home page')
    return;
  }
  if (req.url === '/about') {
    res.end('Here is our short history')
    return;
  } 
  
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
})

  

server.listen(5002)
console.log('Server is listening on port 5002')