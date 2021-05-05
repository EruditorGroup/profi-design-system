const fs = require('fs');
const {CSS_MODULE_LOCAL_IDENT_NAME_GENERATOR} = require('../.config');

module.exports = {
  stories: [
    '../packages/**/*.stories.mdx',
    '../packages/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-postcss',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  webpackFinal: async (config, {configType}) => {
    console.dir(config, {depth: null});
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          {
            oneOf: [
              {
                test: /\.(css|scss)$/,
                use: [
                  'style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      importLoaders: 2,
                      modules: {
                        getLocalIdent: (context, localIdentName, localName) => {
                          return CSS_MODULE_LOCAL_IDENT_NAME_GENERATOR(
                            localName,
                            context.resource,
                          );
                        },
                      },
                    },
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      postcssOptions: {
                        plugins: [
                          [
                            'postcss-preset-env',
                            {
                              preserve: false,
                              browsers: [
                                ">0.2%",
                                "not dead",
                                "not op_mini all"
                              ],
                              importFrom: fs
                                .readdirSync('./packages')
                                .map(
                                  (p) => `./packages/${p}/src/styles/theme.css`,
                                )
                                .filter(p => fs.existsSync(p)),
                            },
                          ],
                        ],
                      },
                    },
                  },
                  'sass-loader',
                ],
              },
              ...config.module.rules,
            ],
          },
        ],
      },
      resolve: {
        ...config.resolve,
        modules: ['src', 'node_modules'],
      },
    };
  },
};
