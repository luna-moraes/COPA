const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './public/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    module: {rules: [
        {
            test: /\.less$/i,
            use: ['style-loader', 'css-loader', 'less-loader'],
        },
    ]},
    plugins: [
        new HtmlWebpackPlugin({template: './public/index.html'}),
    ],
}
