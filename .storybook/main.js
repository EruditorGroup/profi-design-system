const webpackConfig = require('../webpack.config');

module.exports = {
  stories: [
    '../packages/**/*.stories.mdx',
    '../packages/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, {configType}) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        modules: ['src', 'node_modules'],
        extensions: [
          ...config.resolve.extensions,
          ...webpackConfig.resolve.extensions,
        ],
      },
      plugins: [...config.plugins, ...webpackConfig.plugins],
      module: {
        ...config.module,
        rules: webpackConfig.module.rules,
      },
    };
  },
};
