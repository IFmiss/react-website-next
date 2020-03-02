const proxy = require('./proxy')

module.exports = (app) => {
  app.use(proxy({
    '/api': {
      target: 'https://daiwei.site/api',
      secure: false,
      changeOrigin: true,
      onProxyReq (proxyReq, req, res) {
        logger.logInfo('[NODE代理 Req]');
      },
      onProxyRes (proxyReq, req, res) {
        logger.logInfo('[NODE代理 Res]');
      },
      onError (err, req, res) {
        logger.logErr('[NODE代理 Error]', err);
      }
    },
  }))
}