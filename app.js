// import all the dependencies
const dependencies = require('./dependencies/dependedncies');

const routes = require('./routes/routes');

const app = dependencies.app;

app.use('/', routes.indexRouter);
app.use('/users', dependencies.auth.keycloak.protect(), routes.usersRouter);

module.exports = app;