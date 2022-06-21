const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
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
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
                exclude: /node_modules/,
            },
            // {
            //     test: /\.(scss|css)$/,
            //     use: ['style-loader', 'css-loader', {
            //         loader: 'sass-loader',
            //         options: {
            //             sassOptions: {
            //                 includePaths: [path.resolve(__dirname, './packages/platform-components/src')],
            //             },
            //         },
            //     }],
            // },
            {
                test: /\.(s(a|c)ss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', {
                    loader: 'sass-loader',
                    options: {
                        sassOptions: {
                            includePaths: [path.resolve(__dirname, './packages/platform-components/src')],
                        },
                    },
                }],
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
        extensions: ['.ts', '.tsx', '.js', '.json'],
        fallback: {
            'stream': require.resolve('stream-browserify'),
            'crypto': require.resolve('crypto-browserify'),
        },
    },
};
