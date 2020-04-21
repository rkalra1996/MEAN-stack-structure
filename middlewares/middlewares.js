const coreMiddlewares = require('./core/core');
const authMiddleWare = require('./auth/auth.js');

module.exports = {
    ...coreMiddlewares,
    auth: authMiddleWare.keycloak(),
}