var webpack = require('webpack');
var HTMLWebpackPulgin = require('html-webpack-plugin');
var HTMLWebpackPulginConfig = new HTMLWebpackPulgin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: __dirname  + '/app/index.js',
    mode: 'development',
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    plugins: [
        HTMLWebpackPulginConfig,
        new webpack.LoaderOptionsPlugin({
            options: {
                rules: {
                    loaders: [
                        {
                            test: /\.js$/,
                            exclude: /node_modules/,
                            loader: 'babel-loader'
                        },
                        {
                            test: /\.(html)$/,
                            loader: 'html-loader',
                            options: {
                                attrs: [':data-src']
                            }
                        }
                    ]
                }
            }
          })
    ]
};
