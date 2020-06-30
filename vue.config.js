module.exports = {
    entry: `${__dirname}/src/index.js`,
    output: {
        path: `${__dirname}/src`,
        publicPath: '/src/',
        filename: 'main.js',
    },
    outputDir: 'docs',
    filenameHashing: false,
    productionSourceMap: false,
    assetsDir: './',
    publicPath: './'
  }
