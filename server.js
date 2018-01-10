// This is a simple http server script to deliver the website in the "demo"
// folder. Run `npm run demo` in your command line to start the server.

const http = require('http')
const send = require('send')
const url = require('url')

http.createServer((req, res) => {
  send(req, url.parse(req.url).pathname, {root: __dirname}).pipe(res)
}).listen(3000)

console.log('Load http://localhost:3000/demo/ for the demo.');
