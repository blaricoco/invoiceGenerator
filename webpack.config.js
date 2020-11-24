const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    // Webpack Configuration
    mode: 'development',
    entry: {
        // Path to javascript file
        app: './src/index.js'},
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            },
        ]},
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Invoice Generator',
            template: './src/template.ejs',
            filename: 'invoice.html',
            // JavaScript file to attach to HTML file
            chunks: ['app']
        })
    ],
    output: {
        // Javascript file that contains application's code and dependencies
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        
    },
    devtool: 'inline-source-map',
    
}