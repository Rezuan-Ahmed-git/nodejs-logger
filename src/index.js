const express = require('express');
const logger = require('./logger');
const morgan = require('morgan');
const uuid = require('uuid');

// const useMorgan = require('./useMorgan');

const app = express();

// useMorgan(app);

app.get('/', (req, res) => {
  // logger.log(`${req.method} - ${req.url} - ${new Date().toISOString()}`);
  res.status(200).json({ message: 'welcome' });
});

app.listen(4000, () => {
  logger.log('info', 'Server is listening on port 4000');
});
