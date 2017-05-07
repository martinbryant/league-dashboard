var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Dashboard',
            template: './src/index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8000,
        stats: 'errors-only'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /(\.css)$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff|woff2)$/,
                use: 'url-loader?prefix=font/&limit=5000'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file-loader'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    }
};