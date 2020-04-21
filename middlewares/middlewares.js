const coreMiddlewares = require('./core/core');
const {keycloak} = require('./auth/auth.js');

module.exports = {
    ...coreMiddlewares,
    auth: {
        keycloak,
    },
}