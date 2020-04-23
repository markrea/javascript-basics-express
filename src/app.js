const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacters } = require('./lib/strings');
const { add, subtract } = require('./lib/numbers');
const errorMessage = { error: 'Parameters must be valid numbers.' };

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const length = req.query.length || 1;

  res.json({ result: firstCharacters(req.params.string, length) });
});

app.get('/numbers/add/:firstNumber/and/:secondNumber', (req, res) => {
  // eslint-disable-next-line radix
  const firstNumber = parseInt(req.params.firstNumber);
  // eslint-disable-next-line radix
  const secondNumber = parseInt(req.params.secondNumber);
  return Number.isNaN(firstNumber) || Number.isNaN(secondNumber)
    ? res.status(400).json(errorMessage)
    : res.status(200).json({ result: add(firstNumber, secondNumber) });
});
app.get('/numbers/subtract/:firstNumber/from/:secondNumber', (req, res) => {
  // eslint-disable-next-line radix
  const firstNumber = parseInt(req.params.firstNumber);
  // eslint-disable-next-line radix
  const secondNumber = parseInt(req.params.secondNumber);
  return Number.isNaN(firstNumber) || Number.isNaN(secondNumber)
  ? res.status(400).json(errorMessage)
  :res.status(200).json({ result: subtract(secondNumber, firstNumber) });
})
module.exports = app;
