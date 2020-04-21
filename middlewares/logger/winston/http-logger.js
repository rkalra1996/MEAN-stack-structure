const morgan = require('morgan');
const winstonLogger = require('./../winston/winston');

winstonLogger.stream = {
    write: message => winstonLogger.info(message.substring(0, message.lastIndexOf('\n'))),
};

module.exports = morgan(
    ':method :url :status :response-time ms - :res[content-length]',
  { stream: winstonLogger.stream },
)