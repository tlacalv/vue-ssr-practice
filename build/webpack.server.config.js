const {merge} = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const base = require('./webpack.base.config');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = merge(base, {
    target: 'node',
    entry: './entry-server.js',
    
    // for bundle renderer source map support
    devtool: '#source-map',

    output: {
        //tells the server bundle to use Node-style exports
        libraryTarget: 'commonjs2',
        filename: 'server-bundle.js'
    },
    //externalize app dependencies. This makes the server build much faster
    //and generates a smaller bundle file.
    externals: nodeExternals({
        allowlist: /\.css$/
    }),
    // this plugin turns the entire output of the server build
    //into a single JSON file. The default file name will be 
    // `vue-ssr-server-bundle.json`
    plugins: [
        new VueSSRServerPlugin()
    ]
})