module.exports = {
    entry: './app/App.js',
    output: {
        path: __dirname + '/public', 
        filename: 'bundle.js'
    },

    devServer: {
    inline: true,
    contentBase: './public',
    port: 3333
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react', 'stage-2']
            }
        },
        {
            test: /\.css$/,
            loader: ['style-loader', 'css-loader']
        }]
    }


}
