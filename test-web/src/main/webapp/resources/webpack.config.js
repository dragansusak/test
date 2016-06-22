var config = {
    entry: './js/index.js',

    output: {
        path:'./js',
        filename: 'bundle.js',
    },

    devServer: {
        inline: true,
        port: 9090
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',

                query: {
                    presets: ['react']
                }
            },
            {
                test:/\.css$/,
                exclude: /node_modules/,
                loader: 'style!css',
            }
        ]
    },
    resolve:{
        extensions:['','.js','.es6','.css']
    }
}

module.exports = config;