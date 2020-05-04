const express = require('express');
const stringsRouter = require('./routers/stringsRouters');
const numbersRouter = require('./routers/numbersRouters');

const app = express();

app.use(express.json());
app.use('/strings', stringsRouter);
app.use('/numbers', numbersRouter);

const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');
const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement,
} = require('./lib/arrays');

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
  const { character } = req.params;
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
