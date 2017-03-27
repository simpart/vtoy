const webpack =　require("webpack");
module.exports = {
    entry: __dirname + '/../../src/js/entry/login.js',
    output: {
        path: __dirname + '/../../src/js/dist',
        filename: 'login.js'
    },
//    plugins: [
//        new webpack.optimize.UglifyJsPlugin()
//    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: __dirname + '../../node_modules/',
            loader: 'babel-loader'  ,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
