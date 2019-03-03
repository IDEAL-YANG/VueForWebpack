const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.export = {
    entry: {
        app:'./src/index.js'
    },
    plugin: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    }
};