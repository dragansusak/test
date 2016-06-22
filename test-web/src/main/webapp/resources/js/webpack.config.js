var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: ["./entry.js"],
    output: {
        filename: "bundle_w.js"
    },
    module:{
        // preLoaders: [
        //     {
        //         test: /\.js$/,
        //         exclude: /node_modules/,
        //         loader: 'jshint-loader'
        //
        //     }
        // ],
        loaders:[
            {
                test:[/\.js$/, /\.es6$/],
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['react','es2015']
                }
            },
            {
                test:/\.css$/,
                exclude: /node_modules/,
                loader: 'style!css',
            }

        ]
    },
    plugins: [HtmlWebpackPluginConfig],
    resolve:{
        extensions:['','.js','.es6','.css']
    }
}