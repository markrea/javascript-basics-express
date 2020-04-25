const express = require('express');

const app = express();

app.use(express.json());

const { sayHello, uppercase, lowercase, firstCharacters } = require('./lib/strings');
const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');
const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');
const { getNthElement, arrayToCSVString, addToArray2, elementsStartingWithAVowel, removeNthElement } = require('./lib/arrays');

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

app.post('/numbers/multiply', (req, res) => {
  const { a, b } = req.body;
  if (!a || !b) {
    return res.status(400).send({ error: 'Parameters "a" and "b" are required.' })
  }
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    return res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: multiply(req.body.a, req.body.b) });
});

app.post('/numbers/divide', (req, res) => {
  const { a, b } = req.body;
  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (a === 0) {
    res.status(200).json({ result: 0 });
  }
  if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: divide(a, b) });
});

app.post('/numbers/remainder', (req, res) => {
  const { a, b } = req.body;
  res.status(200).json({ result: remainder(a, b) });
});

app.post('/booleans/negate', (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
});

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  const number = parseInt(req.params.number);
  return Number.isNaN(number)
    ? res.status(400).json({ error: 'Parameter must be a number.' })
    : res.status(200).json({ result: isOdd(number) });
});

app.get('/booleans/:string/starts-with/:character', (req, res) => {
  const character = req.params.character;
  if (character[1]) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' })
  } else {
    res.status(200).json({ result: startsWith(req.params.character, req.params.string) });
  };
});

app.post('/arrays/element-at-index/:index', (req, res) => {
  const { array } = req.body;
  res.status(200).json({ result: getNthElement(req.params.index, array) });
});

app.post('/arrays/to-string', (req, res) => {
  const { array } = req.body;
  res.status(200).json({ result: arrayToCSVString(array) });
});

app.post('/arrays/append', (req, res) => {
  const { array } = req.body;
  const { value } = req.body;
  res.status(200).json({ result: addToArray2(value, array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  const { array } = req.body;
  res.status(200).json({ result: elementsStartingWithAVowel(array) })
});

app.post('/arrays/remove-element', (req, res) => {
  const { array } = req.body;
  let { index } = req.query;
  if (!index) {
    index = 0;
  }
  res.status(200).json({ result: removeNthElement(index, array) })
})
module.exports = app;
