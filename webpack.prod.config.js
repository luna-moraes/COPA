const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './assets/js/index.js',
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
        new HtmlWebpackPlugin({template: './assets/index.html'}),
        new CopyWebpackPlugin({
            patterns: [{
                from: 'assets',
                globOptions: {ignore: [
                    '**/*.html',
                    '**/*.js',
                    '**/*.css',
                    '**/*.less',
                ]},
                noErrorOnMissing: true,
            }],
        }),
    ],
}
