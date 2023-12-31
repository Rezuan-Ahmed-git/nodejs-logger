const { createLogger, format, transports } = require('winston');

const level = process.env.LOG_LEVEL || 'debug';

const formatParams = ({ timestamp, level, message, ...args }) => {
  const ts = timestamp.slice(0, 19).replace('T', ' ');

  return `${ts} ${level}: ${message} ${
    Object.keys(args).length > 0 ? JSON.stringify(args) : ''
  }`;
};

const devFormat = format.combine(
  format.colorize({ all: true }),
  format.timestamp(),
  format.align(),
  format.printf(formatParams)
);

const prodFormat = format.combine(
  format.timestamp(),
  format.align(),
  format.printf(formatParams)
);

/**
 * @type {Logger}
 */
let logger = null;

if (process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'production') {
  logger = createLogger({
    level,
    format: prodFormat,
    transports: [
      new transports.File({ filename: 'logs/error.log', level: 'error' }),
      new transports.File({ filename: 'logs/combined.log' }),
    ],
  });
} else {
  logger = createLogger({
    level,
    format: devFormat,
    transports: [new transports.Console()],
  });
}

module.exports = logger;
