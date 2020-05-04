const express = require('express');
const stringsRouter = require('./routers/stringsRouters');
const numbersRouter = require('./routers/numbersRouters');
const booleansRouter = require('./routers/booleansRouters');
const arraysRouter = require('./routers/arraysRouters');

const app = express();

app.use(express.json());
app.use('/strings', stringsRouter);
app.use('/numbers', numbersRouter);
app.use('/booleans', booleansRouter);
app.use('/arrays', arraysRouter);

module.exports = app;
