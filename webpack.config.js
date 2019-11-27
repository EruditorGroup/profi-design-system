const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');

const path = require('path');
const context = path.resolve(__dirname, 'src');

module.exports = {
  mode: 'development',
  entry: './index.tsx',
  context,
  output: {
    filename: 'ui.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({title: 'PROFI UI'}),
    new HtmlWebpackRootPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-typescript',
                  {isTSX: true, allExtensions: true},
                ],
              ],
              plugins: [
                '@babel/transform-react-jsx',
                [
                  'react-css-modules',
                  {
                    context,
                    autoResolveMultipleImports: true,
                    generateScopedName: '[name]__[local]-[hash:base64:5]',
                    handleMissingStyleName: 'warn',
                    webpackHotModuleReloading: true,
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: {
                context,
                localIdentName: '[name]__[local]-[hash:base64:5]',
              },
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
