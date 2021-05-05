const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CSS_MODULE_LOCAL_IDENT_NAME_GENERATOR} = require('./.config');

module.exports = {
  mode: 'development',
  context: path.resolve('src'),
  // where the start of your bundle
  entry: './index.ts',
  output: {
    // where we should output webpack bundle results
    filename: 'index.js',
    path: path.resolve('dist'),
  },
  resolve: {
    // supported extensions
    // if we dont add extensions, webpack will skip this import
    extensions: ['.js', '.jsx', '.ts', '.tsx', 'css', 'scss'],
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        // use babel-loader on each ts,tsx file
        test: /\.tsx?$/,
        use: [
          {
            // babel provides the transpiler for typescript, jsx and other syntax
            // configuration of babel is placed in ./babel.config.js
            loader: 'babel-loader',
            options: require('./babel.config.js'),
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          // load styles dynamically as with <link /> tag
          {
            loader:
              process.env.NODE_ENV === 'production'
                ? MiniCssExtractPlugin.loader
                : 'style-loader',
          },
          {
            // css-loader allows us to generate unique classnames for incapsulate styles inside npm module
            loader: 'css-loader',
            options: {
              // we should import sass-loader and postcss-loader before css-loader to transpile scss-syntax and append plugins
              importLoaders: 2,
              modules: {
                // provides common unique classname generator of babel and webpack
                // babel is generating separated modules (ES-modules)
                // webpack generates all-included bundle
                // so we should use the same className generator for everybody
                getLocalIdent: (context, localIdentName, localName) => {
                  return CSS_MODULE_LOCAL_IDENT_NAME_GENERATOR(
                    localName,
                    context.resource,
                  );
                },
              },
            },
          },
          // sass-loader is syntax booster of project`s styles
          'sass-loader',
          // transform css variables to string values
          // 'css-variables-loader',
          // autoprefixer and custom transpile plugins
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                ident: 'postcss',
                syntax: require('postcss-scss'),
                plugins: [
                  require('autoprefixer', {
                    browser: ['> 1%', 'ie > 9'],
                  }),
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
