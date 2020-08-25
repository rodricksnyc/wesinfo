// Node Modules
const path = require('path');

// Webpack Plugins
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',

    entry: {
        app: path.resolve(__dirname, 'src', 'index.js')
    },

    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin()
    ],

};