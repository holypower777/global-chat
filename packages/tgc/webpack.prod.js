const CompressionPlugin = require('compression-webpack-plugin');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

const rootWebpackConfig = require('../../webpack.config');

const envFile = dotenv.config({ path: __dirname + '/prod.env' });
const env = envFile.parsed;

module.exports = {
    ...rootWebpackConfig,
    mode: 'production',
    entry: {
        tgc: require.resolve('./src/app.tsx'),
    },
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
        clean: true,
    },
    optimization: {
        splitChunks: { chunks: 'all' },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css',
        }),
        new CompressionPlugin(),
        new HtmlWebpackPlugin({
            favicon: `${__dirname}/../../static/favicon.ico`,
            title: 'Global chat',
            template: `${__dirname}/../../static/index.html`,
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(env),
        }),
    ],
};
