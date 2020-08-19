const {merge} = require('webpack-merge');
const webpack = require('webpack');
const base = require('./webpack.base.config');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

module.exports = merge(base, {
    entry: './entry-client.js',
    optimization: {
        splitChunks: {
            name: "manifest",
            minChunks: Infinity
        }
    },
    plugins: [
        // Important: this splits the webpack runtime into a leading chunk
        //so that async chunks can be injected right after it.
        //this also enables better caching for your app/vendor code.
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "manifest",
        //     minChunks: Infinity
        // }),
        //this plugins generates `vue-ssr-client-manifest.json` in the output directory
        new VueSSRClientPlugin()
    ]
})