var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/main.tsx',
    output: {
        filename: 'dist/bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        alias: { // Fix issue with Invariant Violation: addComponentAsRefTo(...)
            'react': path.join(__dirname, 'node_modules', 'react')
        },
        extensions: ['', '.Webpack.js', '.web.js', '.ts', '.js', '.tsx']
    },
    //plugins: [
    //    new webpack.optimize.DedupePlugin(),
    //    new webpack.optimize.UglifyJsPlugin()
    //],
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'ts-loader'
            }
        ]
    }
}