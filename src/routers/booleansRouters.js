const express = require('express');
const booleansControllers = require('../controllers/booleansControllers');

const router = express.Router();

router.post('/negate', booleansControllers.negate);
router.post('/truthiness', booleansControllers.truthiness);
router.get('/is-odd/:number', booleansControllers.isOdd);
router.get('/:string/starts-with/:character', booleansControllers.startsWith);

module.exports = router;
