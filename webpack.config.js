const path = require('path');
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
    new MiniCssExtractPlugin({
      filename: isProduction ? '[name].[contenthash].css' : '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          {loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: isProduction
                  ? '[hash:base64:7]'
                  : '[local]-[hash:base64:5]',
              },
            },
          },
          {loader: 'postcss-loader'},
        ],
      },
    ],
  },
};
