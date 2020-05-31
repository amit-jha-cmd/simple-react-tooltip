var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/SimpleReactTooltip.js',
    output: {
        path: path.resolve('lib'),
        filename: 'SimpleReactTooltip.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}