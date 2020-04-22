// import all the dependencies
const dependencies = require('./dependencies/dependedncies');
const routes = require('./routes/routes');
const app = dependencies.app;

app.use('/api',routes)

module.exports = app;