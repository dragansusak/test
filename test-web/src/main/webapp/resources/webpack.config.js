var config = {
    entry: './js/index.js',

    output: {
        path:'./js',
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 9090
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',

                query: {
                    presets: ['react']
                }
            }
        ]
    }
}

module.exports = config;