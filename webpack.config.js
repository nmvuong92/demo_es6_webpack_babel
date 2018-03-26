var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        "bundle": "./js/main.js",
      },
      output: {
        path: "./dist",
        filename: "[name].js"
      },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
          include: /\.min\.js$/,
          minimize: true
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ],
        rules: [
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};