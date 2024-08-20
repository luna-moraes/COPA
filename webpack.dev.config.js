const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './assets/js/index.js',
    devServer: {
        port: 8000,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        publicPath: 'http://localhost:8000/',
    },
    module: {rules: [
        {
            test: /\.less$/i,
            use: ['style-loader', 'css-loader', 'less-loader'],
        },
    ]},
    plugins: [
        new HtmlWebpackPlugin({template: './assets/index.html'}),
    ],
}
