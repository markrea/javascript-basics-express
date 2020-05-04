const express = require('express');
const stringsController = require('../controllers/stringsControllers');

const router = express.Router();

router.get('/hello/:string', stringsController.hello);
router.get('/upper/:string', stringsController.upper);
router.get('/lower/:string', stringsController.lower);
router.get('/first-characters/:string', stringsController.firstCharacters)

module.exports = router;
