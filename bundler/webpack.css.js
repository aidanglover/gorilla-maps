const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'development', // Set the mode to development
    plugins: [
        new MiniCSSExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
    module: {
        rules: [{
            test: /\.css$/i,
            use: [
                MiniCSSExtractPlugin.loader,
                'css-loader'
            ],
        }, ],
    },
});