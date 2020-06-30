module.exports = {
    pages: {
        index: {
              entry: 'src/main.js',
              template: 'public/index.html',
              filename: 'index.html',
              title: 'MQ',
              chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        subpage: 'src/subpage/main.js'
    },
    publicPath: '/mq/',
    outputDir: 'docs',
    filenameHashing: false,
    productionSourceMap: false,
    assetsDir: './',
    publicPath: './'
}
