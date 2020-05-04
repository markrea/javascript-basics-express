const express = require('express');
const stringsRouter = require('./routers/stringsRouters');
const numbersRouter = require('./routers/numbersRouters');
const booleansRouter = require('./routers/booleansRouters');

const app = express();

app.use(express.json());
app.use('/strings', stringsRouter);
app.use('/numbers', numbersRouter);
app.use('/booleans', booleansRouter);

const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement,
} = require('./lib/arrays');

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
