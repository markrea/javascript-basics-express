const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

exports.add = (req, res) => {
  // eslint-disable-next-line radix
  const firstNumber = parseInt(req.params.firstNumber);
  // eslint-disable-next-line radix
  const secondNumber = parseInt(req.params.secondNumber);
  return Number.isNaN(firstNumber) || Number.isNaN(secondNumber)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: add(firstNumber, secondNumber) });
};

exports.subtract = (req, res) => {
  // eslint-disable-next-line radix
  const firstNumber = parseInt(req.params.firstNumber);
  // eslint-disable-next-line radix
  const secondNumber = parseInt(req.params.secondNumber);
  return Number.isNaN(firstNumber) || Number.isNaN(secondNumber)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: subtract(secondNumber, firstNumber) });
};

exports.multiply = (req, res) => {
  const { a, b } = req.body;
  if (!a || !b) {
    return res.status(400).send({ error: 'Parameters "a" and "b" are required.' })
  }
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    return res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: multiply(req.body.a, req.body.b) });
};

exports.divide = (req, res) => {
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
};

exports.remainder = (req, res) => {
  const { a, b } = req.body;
  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (a === 0) {
    res.status(200).json({ result: 0 })
  }
  if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' })
  }
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' })
  }
  res.status(200).send({ result: remainder(a, b) });
};
