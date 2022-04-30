const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const rootWebpackConfig = require('../../webpack.config');

const envFile = dotenv.config({ path: __dirname + '/prod.env' });
const env = envFile.parsed;

module.exports = {
    ...rootWebpackConfig,
    mode: 'production',
    entry: {
        app: require.resolve('./src/app.tsx'),
    },
    output: {
        publicPath: '',
        path: path.join(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        splitChunks: { chunks: 'all' },
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(env),
        }),
    ],
};
