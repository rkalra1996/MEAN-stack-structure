
const clientProxyPrefix = process.env.PROXY_CLIENT_PREFIX;
const uplinkServerProxyPrefix = process.env.UPLINK_SERVER_PREFIX;

module.exports = {
    uplinkServerAddress: process.env.UPLINK_SERVER_ADDRESS,
    httpProxyReqPathResolver: function(originalRequest) {
        let updatedURL = originalRequest.originalUrl;
        if (clientProxyPrefix && uplinkServerProxyPrefix) {
            updatedURL = originalRequest.originalUrl.replace(`/${clientProxyPrefix}`, `/${uplinkServerProxyPrefix}`);
        }
        return updatedURL;
    }
}