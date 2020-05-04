const express = require('express');
const numbersControllers = require('../controllers/numbersControllers');

const router = express.Router();

router.get('/add/:firstNumber/and/:secondNumber', numbersControllers.add);
router.get('/subtract/:firstNumber/from/:secondNumber', numbersControllers.subtract);
router.post('/multiply', numbersControllers.multiply);
router.post('/divide', numbersControllers.divide);
router.post('/remainder', numbersControllers.remainder);

module.exports = router;
