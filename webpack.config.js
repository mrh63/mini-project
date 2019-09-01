const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {

    const env = dotenv.config({path: '.env.values'}).parsed;
    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});

    return {
        entry: './src/app.js',
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }]
        },
        plugins: [
            new webpack.DefinePlugin(envKeys)
        ],
        devtool: 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public')
        }
    }
}