const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: 'development',
  context: path.resolve('src'),
  entry: './index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve('dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', 'css', 'scss', 'sass'],
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: isProduction ? '[name].[contenthash].css' : '[name].css',
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        resolve: {
          alias: fs.readdirSync('./src').reduce((aliases, folder) => ({
            ...aliases,
            [folder]: path.resolve(`./src/${folder}`),
          })),
        },
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          // {loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader'},
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: isProduction
                  ? 'ui_[hash:base64:7]'
                  : '[local]-[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
};
