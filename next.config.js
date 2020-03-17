const path = require('path');
const fs = require('fs')
const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const withPlugins = require("next-compose-plugins");
const isPord = process.env.NODE_ENV === 'production' 
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './style/val.less'), 'utf8')
)

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

module.exports = withPlugins(
  [
    withLess
  ], {
    experimental: {
      basePath: '/next'
    },
    assetPrefix: isPord ? '/web_next/' : '',
    distDir: '_next',
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables
    },
    webpack(config, options) {
      config.module.rules.push({
        test: /\.js$/,
        enforce: 'pre',
        include: [
          path.resolve('components'),
          path.resolve('pages'),
        ],
      });

      // config.module.rules.push({
      //   test: /\.svg$/,
      //   use: {
      //     loader: 'svg-sprite-loader',
      //     options: {
      //       symbolId: '[name]'
      //       // symbolId: filePath => path.basename(filePath)
      //     }
      //   },
      //   include: path.resolve(__dirname, 'assets/svg')
      // });

      config.devtool = 'cheap-module-inline-source-map';
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        '@root': path.join(__dirname, './', '/'),
        '@pages': path.join(__dirname, 'pages'),
        '@components': path.join(__dirname, 'components'),
        '@style': path.join(__dirname, 'style'),
        '@constance': path.join(__dirname, 'constance'),
        '@utils': path.join(__dirname, 'utils'),
        '@module': path.join(__dirname, 'module'),
        '@assets': path.join(__dirname, 'assets'),
        '@store': path.join(__dirname, 'store'),
        react: path.resolve('./node_modules/react')
      }
      return config
    },
    // serverRuntimeConfig: { // Will only be available on the server side
    //   rootDir: path.join(__dirname, './'),
    //   PORT: process.env.NODE_ENV !== 'production' ? 8080 : (process.env.PORT || 8080)
    // },
    // publicRuntimeConfig: { // Will be available on both server and client
    //   staticFolder: '/static',
    //   isDev: process.env.NODE_ENV !== 'production' // Pass through env variables
    // },
    // env: {
    //   SERVER_HOST: '127.0.0.1:4002'
    // },
    // prot: {
    //   SERVER_HOST: ''
    // }
  }
)