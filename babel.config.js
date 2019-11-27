const path = require('path');
const context = path.resolve(__dirname, 'src');

module.exports = {
  presets: [['@babel/preset-typescript', {isTSX: true, allExtensions: true}]],
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
};
