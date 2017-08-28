const path = require("path");

const config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/js')
    },
    module: {
        rules: [
                {
                    test: /\.js$/,
                    use: 'babel-loader'
            }
        ]
    }
}

module.exports = config