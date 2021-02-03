const path = require('path');

module.exports = {
  mode: 'development',
  context: path.resolve('src'),
  entry: './index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve('dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
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
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
