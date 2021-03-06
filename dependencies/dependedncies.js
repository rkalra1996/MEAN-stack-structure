const path = require('path');

const apiFilterExpression = `/v1/*`;
const {httpProxyReqPathResolver, uplinkServerAddress} = require('./utils/reverse-proxy-utils');

const httpLogger = require('./../middlewares/middlewares').logger.winstonHttpLogger;
const {compression, express,cookieParser, auth, httpProxy} = require('./../middlewares/middlewares');
// setup authentication on routes
const authenticator = auth.keycloak();
// setup express dependencies
const app = express();
// setup initials
app.use(compression());
app.use(httpLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './../public')));
// setup authentication
app.use(authenticator.expressSession(authenticator.sessionConfig));
app.use(authenticator.keycloak.middleware());
// use reverse proxy to redirect all requests starting from /api

function consoleForMiddleWare(req,res,next) {
    console.log('filtered api ', req.originalUrl);
    console.log('redirecting to ', uplinkServerAddress);
    next();
}
app.use(apiFilterExpression, consoleForMiddleWare, httpProxy(uplinkServerAddress, true, httpProxyReqPathResolver));

module.exports = {
    app,
    auth: {keycloak: authenticator.keycloak},
}