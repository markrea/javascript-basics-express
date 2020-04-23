const express = require('express');

const app = express();

app.use(express.json());

const { sayHello, uppercase, lowercase, firstCharacters } = require('./lib/strings');
const { add, subtract, multiply } = require('./lib/numbers');

const errorMessage = { error: 'Parameters must be valid numbers.' };

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
    : res.status(200).json({ result: subtract(secondNumber, firstNumber) });
});

app.post('/numbers/multiply/', (req, res) => {
  const { a, b } = req.body;
  if (!a || !b) {
    return res.status(400).send({ error: 'Parameters "a" and "b" are required.' })
  }
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    return res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: multiply(req.body.a, req.body.b) });
});
module.exports = app;
