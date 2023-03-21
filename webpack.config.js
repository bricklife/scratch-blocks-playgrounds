const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: `./src/index.js`,
    output: {
        filename: "main.js",
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/index.html',
                    to: 'index.html'
                },
                {
                    from: 'node_modules/scratch-blocks/media',
                    to: 'media'
                }
            ]
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        }
    }
};
