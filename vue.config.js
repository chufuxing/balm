const path = require('path')
module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'assets',
    // lintOnsave: true,
    /**是否在每次保存代码都启用eslint */
    productionSourceMap: false,

    devServer: {
        open: true,
        proxy: {
            '/api': {
                target: "http://192.168.8.164", //不能为空
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
}