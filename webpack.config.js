const webpack = require('webpack')

module.exports = {
    entry: {
        index: './js/index.js'
    },
    output: {
        filename: `[name].js`,
        path: path.resolve(__dirname, './'),
    },
}