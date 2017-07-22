module.exports = {
    devtool: 'source-map',
    entry: './client/app/App.js',
    output: {
        path: __dirname + '/client/public', 
        filename: 'bundle.js'
    },

    devServer: {
    inline: true,
    contentBase: './client/public',
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
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false' 
            ]
        }]
    }


}
