const winstonLogger = require('./winston/winston');
const httpLogger = require('./winston/http-logger');

module.exports = {
    default: winstonLogger,
    winston: winstonLogger,
    winstonHttpLogger: httpLogger,
};