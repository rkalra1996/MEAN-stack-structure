const path = require('path');
// import middlewares
const middlewares = require('./../middlewares/middlewares');
// import auth module to setup authentication on routes
const auth = middlewares.auth.keycloak();
// setup express dependencies
const app = middlewares.express();

// setup initials
app.use(middlewares.compression());
app.use(middlewares.logger('dev'));
app.use(middlewares.express.json());
app.use(middlewares.express.urlencoded({ extended: false }));
app.use(middlewares.cookieParser());
app.use(middlewares.express.static(path.join(__dirname, './../public')));


// setup authentication
app.use(auth.expressSession(auth.sessionConfig));
app.use(auth.keycloak.middleware());

module.exports = {
    app,
    auth: {keycloak: auth.keycloak}
}