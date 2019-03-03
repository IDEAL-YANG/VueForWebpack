const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');

module.export = merge(common,{
    devtool: 'source-map',
    plugin: [
        new UglifyJSPPlugin({
            sourceMap:true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('production')
        })
    ]
});