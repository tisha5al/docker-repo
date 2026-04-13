const http = require('http');

http.createServer((req, res) => {
  res.end("Hello from Node App");
}).listen(3000);
