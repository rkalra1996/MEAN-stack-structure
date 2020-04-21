const getKeyCloakAuthentication = () => {
    return {hello: 'world'};
};

module.exports = {
    keycloak: getKeyCloakAuthentication,
}