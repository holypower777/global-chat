import { resolve } from 'path';
import type { StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
    framework: '@storybook/react',
    core: {
        builder: "webpack5",
        disableTelemetry: true,
    },
    staticDirs: ['./static'],
    stories: [
        // '../packages/**/stories/**/*.story.@(js|jsx|ts|tsx)',
        '../packages/platform-components/src/components/**/*.stories.@(ts|tsx)',
        '../packages/platform-components/stories/**/*.stories.@(ts|tsx)',
    ],
    addons: [
        '@storybook/preset-scss',
        { name: '@storybook/addon-essentials', options: { actions: false }},
        '@storybook/addon-toolbars',
    ],
    webpackFinal: async (config: any) => {
        config.module.rules.push({
            test: /\.(scss|css)$/,
            use: [{
                loader: 'sass-loader',
                options: {
                    sassOptions: {
                        includePaths: [resolve(__dirname, "../packages/platform-components/src")]
                    }
                }
            }],
        });
        return config;
    },
}

module.exports = config;
