const path = require('path');
// import middlewares
const {compression, express, cookieParser, auth, logger} = require('./../middlewares/middlewares');
// const logger = require('./../middlewares/logger/logger').logger;
// import auth module to setup authentication on routes
const authenticator = auth.keycloak();
// setup express dependencies
const app = express();

// setup initials
app.use(compression());
app.use(logger.winstonHttpLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './../public')));

// setup authentication
app.use(authenticator.expressSession(authenticator.sessionConfig));
app.use(authenticator.keycloak.middleware());


module.exports = {
    app,
    auth: {keycloak: authenticator.keycloak},
}