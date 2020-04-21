const kc = require('keycloak-connect');
const expressSession = require('express-session');

const memoryStore = new expressSession.MemoryStore();
const keycloak = new kc({store: memoryStore});

const getKeyCloakAuthentication = () => {
    return {
        keycloak, 
        expressSession, 
        sessionConfig: {
        secret: process.env.KEYCLOAK_SECRET,
        resave: false,
        saveUninitialized: true,
        store: memoryStore,
    }};
};

module.exports = {
    keycloak: getKeyCloakAuthentication,
}