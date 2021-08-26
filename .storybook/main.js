const {CSS_MODULE_LOCAL_IDENT_NAME_GENERATOR} = require('../.config');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const styleLoaders = [
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          [
            require('postcss-custom-properties')({
              preserve: false,
              importFrom:
                'node_modules/@eruditorgroup/profi-toolkit/src/styles/variables.css',
            }),
          ],
        ],
      },
    },
  },
  {
    loader: 'sass-loader',
    options: {
      sassOptions: {
        precision: 10,
      },
    },
  },
];

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
  webpackFinal: async (config, {configType}) => ({
    ...config,
    plugins: [new MiniCssExtractPlugin(), ...config.plugins],
    module: {
      ...config.module,
      rules: [
        {
          oneOf: [
            {
              test: /\.(png|jpe?g|gif)$/i,
              use: [{loader: 'file-loader'}],
            },
            {
              test: /\.(woff|woff2|eot|ttf)$/i,
              use: [
                {
                  loader: 'file-loader',
                  query: {
                    name: '[name].[ext]',
                  },
                },
              ],
            },
            {
              // для не css модулей
              test: /(?<!module)\.(css|scss)$/i,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                },
                {
                  loader: 'css-loader',
                  options: {importLoaders: 1},
                },
                ...styleLoaders,
              ],
            },

            {
              // для css модулей
              test: /\.module\.(css|scss)$/,
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
                ...styleLoaders,
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
  }),
};
