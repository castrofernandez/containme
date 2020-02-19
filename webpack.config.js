const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src',
    entry: {
        'lib/index': './src/index.js',
        'example/lib/index': './example/example.js',
    },
    devServer: {
        contentBase: './src',
        hot: true,
    },
    output: {
        path: path.resolve(__dirname, ''),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
            },
        ],
    },
    stats: {
        colors: true,
    },
    devtool: 'source-map',
};
