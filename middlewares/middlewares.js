const coreMiddlewares = require('./core/core');
const {keycloak} = require('./auth/auth.js');
const httpProxy = require('./reverse-proxy/reverse-proxy').httpProxy;

module.exports = {
    ...coreMiddlewares,
    auth: {
        keycloak,
    },
    httpProxy
}