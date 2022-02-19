const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const rootWebpackConfig = require('../../webpack.config');

module.exports = {
    ...rootWebpackConfig,
    entry: {
        main: require.resolve('./src/app.tsx'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), new HtmlWebpackPlugin()],
    devServer: {
        static: path.resolve(__dirname, './dist'),
        hot: true,
        historyApiFallback: true,
    },
};
