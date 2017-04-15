var path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'blurload.js',
        path: path.resolve(__dirname, './build')
    },
    module: {
    rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                presets: ['es2015']
                }
            }
        ]
    }
}