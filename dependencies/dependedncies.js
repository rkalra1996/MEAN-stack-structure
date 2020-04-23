const path = require('path');
const proxy = require('express-http-proxy');

const clientProxyPrefix = process.env.PROXY_CLIENT_PREFIX;
const uplinkServerProxyPrefix1 = process.env.UPLINK_SERVER_PREFIX;
const uplinkServerAddress1 = process.env.UPLINK_SERVER_ADDRESS;
// import middlewares
const logger = require('./../middlewares/middlewares').logger.default;
const httpLogger = require('./../middlewares/middlewares').logger.winstonHttpLogger;
const {
    compression, express,
    cookieParser, auth} = require('./../middlewares/middlewares');

// import auth module to setup authentication on routes
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


// app.use(httpProxy);
// add reverse proxy middleware
app.use(`/${clientProxyPrefix}/*`, proxy(uplinkServerAddress1, {
    preserveHostHdr: true,
    proxyReqPathResolver: function(req) {
        logger.info('original url is ' + req.originalUrl);
        const updatedURL = req.originalUrl.replace(`/${clientProxyPrefix}`, `/${uplinkServerProxyPrefix1}`);
        logger.info('updated url now is ' +  updatedURL);
        return updatedURL;
    }
}));

module.exports = {
    app,
    auth: {keycloak: authenticator.keycloak},
}