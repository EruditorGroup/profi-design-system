const path = require('path');
const webpackConfig = require('../webpack.config');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, {configType}) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: webpackConfig.module.rules,
      },
    };
  },
};
