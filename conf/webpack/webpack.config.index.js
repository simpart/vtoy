const webpack =　require("webpack");
module.exports = {
    entry: __dirname + '/../../src/js/init/index.js',
    output: {
        path: __dirname + '/../../src/js/app',
        filename: 'index.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: __dirname + '../../node_modules/',
            loader: 'babel-loader'  ,
            query: {
                presets: ['env']
            }
        }]
    }
};
