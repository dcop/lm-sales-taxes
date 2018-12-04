const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    // watch: true,
    devtool: 'inline-source-map',
    entry: ['./index.js'],
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
}