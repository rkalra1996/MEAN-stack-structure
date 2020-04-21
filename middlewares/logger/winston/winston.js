const path = require('path');

const { createLogger, transports, format } = require('winston');

const logFilePath = path.resolve(__dirname, './../../../logs/combined.log');
const logger = createLogger({
    format: format.combine(
      format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
      format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
      new transports.File({
        filename: logFilePath,
        json: false,
        maxsize: 5242880,
        maxFiles: 5,
      }),
      new transports.Console(),
    ]
  });
  
  module.exports = logger