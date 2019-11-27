var HtmlWebpackPlugin = require('html-webpack-plugin');
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
    new HtmlWebpackPlugin({
      title: 'PROFI-UI',
      template: './index.html',
      tagId: 'root',
      tagName: 'div',
    }),
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
                    generateScopedName: '[name]__[local]',
                    webpackHotModuleReloading: true,
                    handleMissingStyleName: 'warn',
                    autoResolveMultipleImports: true,
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
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                context,
                localIdentName: '[name]__[local]',
              },
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
