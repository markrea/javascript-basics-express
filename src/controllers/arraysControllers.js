const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement,
} = require('../lib/arrays');

exports.getNthElement =  (req, res) => {
  const { array } = req.body;
  res.status(200).json({ result: getNthElement(req.params.index, array) });
};

exports.arrayToCSVString = (req, res) => {
  const { array } = req.body;
  res.status(200).json({ result: arrayToCSVString(array) });
};

exports.addToArray2 = (req, res) => {
  const { array } = req.body;
  const { value } = req.body;
  res.status(200).json({ result: addToArray2(value, array) });
};

exports.elementsStartingWithAVowel =  (req, res) => {
  const { array } = req.body;
  res.status(200).json({ result: elementsStartingWithAVowel(array) })
};

exports.removeNthElement = (req, res) => {
  const { array } = req.body;
  let { index } = req.query;
  if (!index) {
    index = 0;
  }
  res.status(200).json({ result: removeNthElement(index, array) })
};
