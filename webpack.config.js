const path = require('path');
const fs = require('fs');
const package = require('./package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CSS_MODULE_LOCAL_IDENT_NAME_GENERATOR} = require('./.config');

const isProduction = process.env.NODE_ENV === 'production';

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
  plugins: [
    // used in production mode only to generate css bundle in ./dist
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        // use babel-loader on each ts,tsx file
        test: /\.tsx?$/,
        resolve: {
          alias: {
            // add alias "@profiru/ui" from package.json to "./src"
            // why: babel config add @profiru/ui to each internal import e.g components/, hooks/
            // that allows to import local components builded npm module
            [package.name]: path.resolve(__dirname, './src'),
          },
        },
        use: [
          {
            // babel provides the transpiler for typescript, jsx and other syntax
            // configuration of babel is placed in ./babel.config.js
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          // in dev mode we can use style loader because we dont care about connect styles
          // but we should use MiniCssExtractPlugin in production because we need css bundle in dist
          {loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader'},
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
          // autoprefixer and other features, config placed in ./postcss.config.js
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
