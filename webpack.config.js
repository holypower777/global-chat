const path = require('path');

module.exports = {
    devtool: 'source-map',
    context: __dirname,
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /(design\/[\w\-]+|constants)\.(scss|sass)$/,
                loader: 'sass-variable-loader',
            },
            {
                test: /\.svg$/,
                use: ['url-loader'],
            },
            {
                test: /\.(jpg|gif|png|eot|otf|woff|woff2|ttf)$/,
                loader: 'file-loader',
            },
        ],
    },
    resolve: {
        alias: {
            hooks: path.resolve(__dirname, 'packages/platform-components/src/hooks'),
        },
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
};
