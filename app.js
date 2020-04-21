// import all the dependencies
const dependencies = require('./dependencies/dependedncies');
const routes = require('./routes/routes');

const app = dependencies.app;

app.use('/', routes.indexRouter);
app.use('/users', routes.usersRouter);

module.exports = app;