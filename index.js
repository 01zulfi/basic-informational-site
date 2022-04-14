const fs = require('fs');
const express = require('express');
const app = express();

const hostname = 'localhost';
const port = 8080;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  fs.readFile('./pages/index.html', 'utf8', (err, data) => {
    if (err) return console.log(err);
    res.end(data);
  });
});

app.get('/home', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  fs.readFile('./pages/index.html', 'utf8', (err, data) => {
    if (err) return console.log(err);
    res.end(data);
  });
});

app.get('/about', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  fs.readFile('./pages/about.html', 'utf8', (err, data) => {
    if (err) return console.log(err);
    res.end(data);
  });
});

app.get('/contact', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  fs.readFile('./pages/contact.html', 'utf8', (err, data) => {
    if (err) return console.log(err);
    res.end(data);
  });
});

app.get('*', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  fs.readFile('./pages/404.html', 'utf8', (err, data) => {
    if (err) return console.log(err);
    res.end(data);
  });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
