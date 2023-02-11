const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './index.html',
    finename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: ["@babel/polyfill", "./index.js"],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        port: 5000,
        watchContentBase: true
    },
    plugins: [
        HtmlWebpackPluginConfig
    ],
    mode: 'development'
}