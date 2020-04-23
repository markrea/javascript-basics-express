const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacters } = require('./lib/strings');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string)});
});

app.get('/strings/first-characters/:string', (req, res) => {
  const length = req.query.length || 1;

  res.json({ result: firstCharacters(req.params.string, length) });
});

module.exports = app;
