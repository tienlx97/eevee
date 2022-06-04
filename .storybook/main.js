const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const fs = require('fs');

/**
 * @typedef {import('@storybook/core-common').StorybookConfig} StorybookBaseConfig
 *
 * @typedef {{
 *   babel: (options: Record<string, unknown>) => Promise<Record<string, unknown>>;
 * }} StorybookExtraConfig
 *
 * @typedef {StorybookBaseConfig &
 *   Required<Pick<StorybookBaseConfig, 'stories' | 'addons' | 'webpackFinal'>> &
 *   StorybookExtraConfig
 * } StorybookConfig
 */

module.exports = /** @type {Omit<StorybookConfig,'typescript'|'babel'>} */ ({
  features: {
    // Enables code splitting
    storyStoreV7: true,
  },
  stories: [],

  // stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-postcss',
  ],

  // @ts-ignore
  plugins: [require('autoprefixer'), require('postcss-color-rebeccapurple')],

  framework: '@storybook/react',
  // custom babel config
  // @ts-ignore
  babel: async options => ({
    ...options,
    // any extra options you want to set
  }),

  webpackFinal: config => {
    const tsPaths = new TsconfigPathsPlugin({
      configFile: path.resolve(__dirname, '../tsconfig.base.json'),
    });

    if (config.resolve) {
      // @ts-ignore
      config.resolve.plugins ? config.resolve.plugins.push(tsPaths) : (config.resolve.plugins = [tsPaths]);
    }

    return config;
  },

  core: {
    builder: 'webpack5',
  },
});
