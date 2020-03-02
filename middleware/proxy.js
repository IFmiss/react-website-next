/**
 * 实现请求代理的中间件
 */
const { createProxyMiddleware } = require('http-proxy-middleware');
const { pathToRegexp } = require('path-to-regexp');
const k2c = require('koa2-connect');

module.exports = (targets) => {
  return async (ctx, next) => {
    const { path } = ctx;
    let proxy = false;
    for (const route of Object.keys(targets)) {
      if (
        pathToRegexp(route).test(path) ||
        new RegExp(`^${route}`).test(path)
      ) {
        proxy = true;
        await k2c(createProxyMiddleware(path, targets[route]))(ctx, next);
        break;
      }
    }

    if (proxy === false) {
      await next();
    } else {
      return;
    }
  };
};
