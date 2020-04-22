// import all the dependencies
const routes = require('./routes/routes');
const {app} = require('./dependencies/dependedncies');

app.use('/api',routes)

module.exports = app;