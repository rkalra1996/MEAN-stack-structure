// import all the dependencies
const dependencies = require('./dependencies/dependedncies');
const logger = require('./middlewares/logger/logger').winston;
const routes = require('./routes/routes');

const app = dependencies.app;

app.use('/', (req,res,next) => {
    logger.info('This is a request log');
    next();
}, routes.indexRouter);
app.use('/users', dependencies.auth.keycloak.protect(), routes.usersRouter);

module.exports = app;