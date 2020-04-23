// import all the dependencies
require('dotenv').config();
const routes = require('./routes/routes');
const {app,auth} = require('./dependencies/dependedncies');

/* app.use('/v1/api/users/*',require('./routes/v1/users')); */
app.use('/api',routes)
app.use( auth.keycloak.middleware( { logout: '/'} ));

module.exports = app;