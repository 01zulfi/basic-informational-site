const http = require('http');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/':
      res.end('<h1>Home</h1>');
      break;
    case '/Home':
      res.end('<h1>Home</h1>');
      break;
    case '/about-me':
      res.end('<h1>About Me</h1>');
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
