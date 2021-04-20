import express from 'express';
import logger from 'morgan';

const app = express()

// Middlewares
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.send('Hello Alkemy');
})

module.exports = app;