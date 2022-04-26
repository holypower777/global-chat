const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const rootWebpackConfig = require('../../webpack.config');
const isDevelopment = process.env.NODE_ENV !== 'production';
let env = process.env;

if (isDevelopment) {
    const dotenv = require('dotenv').config({ path: __dirname + '/.env' });
    env = dotenv.parsed;
}

module.exports = {
    ...rootWebpackConfig,
    entry: {
        main: require.resolve('./src/app.tsx'),
    },
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production'),
            'process.env': JSON.stringify(env),
        }),
    ],
    devServer: {
        historyApiFallback: true,
    },
};
