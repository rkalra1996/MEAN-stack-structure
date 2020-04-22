// import all the dependencies
const dependencies = require('./dependencies/dependedncies');
const routes = require('./routes/routes');
const logger = require('./middlewares/middlewares').logger.winston;

const app = dependencies.app;


app.use('/health', routes.healthRouter);

app.use('/users', dependencies.auth.keycloak.protect(), (req, res, next) => {
    logger.info('i am here users')
    // logger.info(JSON.stringify(req.kauth.grant.access_token.content));
    next();
}, routes.usersRouter);

app.use('/',(req, res, next) => {
    logger.info('i am here')
    // logger.info(JSON.stringify(req.kauth.grant.access_token.content));
    next();
},  routes.indexRouter);
/* app.use(dependencies.auth.keycloak.middleware({logout: '/logout'}), (req,res,next) => {
    logger.info('clicked on logout');
}); */

module.exports = app;