module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/' + process.env.CI_PROJECT_NAME + '/'
    : '/',
    outputDir: 'docs',
    filenameHashing: false,
    productionSourceMap: false,
    assetsDir: './',
    publicPath: './'
  }
