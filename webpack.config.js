const path = require('path');
const context = path.resolve(__dirname, 'src');

module.exports = {
  mode: 'development',
  entry: './index.ts',
  context,
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@ui': path.resolve(__dirname, './src/components/'),
    },
  },
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
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentContext: context,
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
