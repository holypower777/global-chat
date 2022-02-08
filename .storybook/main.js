const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
    core: {
        builder: "webpack5",
    },
    stories: ['../packages/**/stories/**/*.story.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/preset-scss',
        '@storybook/addon-knobs',
        '@storybook/addon-actions/register',
        '@storybook/addon-toolbars',
    ],
    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        // Make whatever fine-grained changes you need
        config.devtool = 'source-map';
        config.module.rules.push({
            test: /\.(js|jsx|ts|tsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        });
        config.module.rules.push({
            test: /\.(scss|css)$/,
            use: [{
                loader: 'sass-loader',
                options: {
                    sassOptions: {
                        includePaths: [path.resolve(__dirname, "../packages/platform-components/src")]
                    }
                }
            }],
        });
        config.module.rules.push({
            test: /(design\/[\w\-]+|constants)\.(scss|sass)$/,
            loader: 'sass-variable-loader',
        });
        config.module.rules.push({
            test: /\.svg$/,
            use: ['url-loader'],
        });
        config.module.rules.push({
            test: /\.(jpg|gif|png|eot|otf|woff|woff2|ttf)$/,
            loader: 'file-loader',
        });

        config.resolve.extensions.push('.js', '.jsx', '.ts', '.tsx', '.scss');
        // Return the altered config
        return config;
    },
};
