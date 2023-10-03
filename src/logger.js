const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

// const logger = {
//   log: console.log,
//   error: console.error,
//   info: console.info,
//   warn: console.warn,
//   debug: console.debug,
// };

module.exports = logger;
