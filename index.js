const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  switch (req.url) {
    case '/':
      res.statusCode = 200;
      fs.readFile('./pages/index.html', 'utf8', (err, data) => {
        if (err) return console.log(err);
        res.end(data);
      });
      break;
    case '/home':
      res.statusCode = 200;
      fs.readFile('./pages/index.html', 'utf8', (err, data) => {
        if (err) return console.log(err);
        res.end(data);
      });
      break;
    case '/about':
      res.statusCode = 200;
      fs.readFile('./pages/about.html', 'utf8', (err, data) => {
        if (err) return console.log(err);
        res.end(data);
      });
      break;
    case '/contact':
      res.statusCode = 200;
      fs.readFile('./pages/contact.html', 'utf8', (err, data) => {
        if (err) return console.log(err);
        res.end(data);
      });
      break;
    default:
      res.statusCode = 200;
      fs.readFile('./pages/404.html', 'utf8', (err, data) => {
        if (err) return console.log(err);
        res.end(data);
      });
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
