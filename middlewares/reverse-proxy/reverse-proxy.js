const proxy = require('express-http-proxy');

const proxyReference = {
    expressProxy: function(serverAddress,preserveHostHeaders,  pathResolverCB) {
        return proxy(serverAddress, {
            preserveHostHdr: preserveHostHeaders ? true : false,
            proxyReqPathResolver: pathResolverCB,
        })
    },
};

const httpReverseProxy = (serverAddress,preserveHostHeaders, pathResolverCB,) => {
    return proxyReference.expressProxy(serverAddress,preserveHostHeaders,  pathResolverCB);
}

module.exports = {
    httpProxy: httpReverseProxy,
}