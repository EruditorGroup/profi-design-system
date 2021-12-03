const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const {eruditorgroup} = require(path.resolve('package.json'));
const {
  CSS_MODULE_LOCAL_IDENT_NAME_GENERATOR,
  GET_PACKEGES_INFO,
} = require('./.config');

module.exports = {
  mode: 'production',
  context: path.resolve('src'),
  // where the start of your bundle
  entry: './index.ts',
  output: {
    // where we should output webpack bundle results
    path: path.resolve('dist'),
  },
  resolve: {
    // supported extensions
    // if we dont add extensions, webpack will skip this import
    extensions: ['.js', '.jsx', '.ts', '.tsx', 'css', 'scss'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${eruditorgroup.libFilename}.css`,
    }),
  ],
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
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
          MiniCssExtractPlugin.loader,
          {
            // css-loader allows us to generate unique classnames for incapsulate styles inside npm module
            loader: 'css-loader',
            options: {
              // we should import sass-loader and postcss-loader before css-loader to transpile scss-syntax and append plugins
              importLoaders: 3,
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
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      importFrom: '../toolkit/src/styles/variables.css',
                    },
                  ],
                ],
              },
            },
          },
          // sass-loader is syntax booster of project`s styles
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                precision: 10,
              },
            },
          },
        ],
      },
    ],
  },
};
