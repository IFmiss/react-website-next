const path = require('path');
const withLess = require('@zeit/next-less')

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

module.exports = withLess({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.js$/,
      enforce: 'pre',
      include: [
        path.resolve('components'),
        path.resolve('pages'),
      ],
    });
    config.devtool = 'cheap-module-inline-source-map';
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@root': path.join(__dirname, './', '/'),
      '@pages': path.join(__dirname, '.', 'pages'),
      '@components': path.join(__dirname, '.', 'components'),
      '@style': path.join(__dirname, '.', 'style'),
      '@constance': path.join(__dirname, '.', 'constance'),
    }
    return config
  },
  serverRuntimeConfig: { // Will only be available on the server side
    rootDir: path.join(__dirname, './'),
    PORT: process.env.NODE_ENV !== 'production' ? 8080 : (process.env.PORT || 8080)
  },
  publicRuntimeConfig: { // Will be available on both server and client
    staticFolder: '/static',
    isDev: process.env.NODE_ENV !== 'production' // Pass through env variables
  },
  env: {
    SERVER_HOST: '127.0.0.1:8080'
  },
  prot: {
    SERVER_HOST: ''
  }
})