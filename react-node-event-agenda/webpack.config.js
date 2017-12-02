var webpack = require('webpack');

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
    },

    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
        // In case you imported plugins individually, you must also require them here:
        Util: "exports-loader?Util!bootstrap/js/dist/util",
        Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown"
      })
  ]
}
