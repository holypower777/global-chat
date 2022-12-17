import { resolve } from 'path';

const config = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      fastRefresh: true,
      reactStrictMode: false,
    }
  },
  core: {
    builder: "webpack5",
    disableTelemetry: true
  },
  staticDirs: ['./static'],
  stories: [
    '../packages/platform-components/src/components/**/*.stories.@(ts|tsx)', 
    '../packages/platform-components/stories/**/*.stories.@(ts|tsx)'
  ],
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-essentials'
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
      }]
    });
    return config;
  },
};
module.exports = config;
