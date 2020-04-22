// import all the dependencies
const dependencies = require('./dependencies/dependedncies');
const routes = require('./routes/routes');

const app = dependencies.app;



app.use('/api',routes)
// app.use('/health', routes.healthRouter);

/* app.use('/users', dependencies.auth.keycloak.protect(), (req, res, next) => {
    // logger.info(JSON.stringify(req.kauth.grant.access_token.content));
    next();
}, routes.usersRouter);
 */
module.exports = app;