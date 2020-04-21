const winstonLogger = require('./winston/winston');
const httpLogger = require('./winston/http-logger');

module.exports = {
    winston: winstonLogger,
    winstonHttpLogger: httpLogger,
};