const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
module.exports = {
    module: {
        rules: [{
                test: '/\.js$/',
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}
module.exports = {
    entry: './src/js/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack JS Boilerplate',
            template: 'src/index.html',
            inject: 'body',
            output: {
                path: path.resolve(__dirname, './dist'),
            }
        }),
        new MiniCSSExtractPlugin()
    ],
    module: {
        rules: [
            {
                test:/\.scss$/,
                use:['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/,
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/app.[contenthash].js',
        clean: true,
    },
};