const express = require('express');
const { sayHello } = require('./lib/strings');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});


/*app.get('/strings/upper/hello', (req, res) => {
  res.status(200).json({result: 'HELLO'});
})*/

module.exports = app;
