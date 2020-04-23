// import all the dependencies
const routes = require('./routes/routes');
const {app,auth} = require('./dependencies/dependedncies');
const healthRouter = require('./routes/health');
// health api for aplication usage
app.use('/health', auth.keycloak.protect(), healthRouter)
// for all other api routes
app.use('/api', routes);
// register keycloack logout url
app.use( auth.keycloak.middleware( { logout: '/'} ));

module.exports = app;