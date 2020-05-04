const express = require('express');
const arraysControllers = require('../controllers/arraysControllers');

const router = express.Router();

router.post('/element-at-index/:index', arraysControllers.getNthElement);
router.post('/to-string', arraysControllers.arrayToCSVString);
router.post('/append', arraysControllers.addToArray2);
router.post('/starts-with-vowel', arraysControllers.elementsStartingWithAVowel);
router.post('/remove-element', arraysControllers.removeNthElement);

module.exports = router;
