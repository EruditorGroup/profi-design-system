module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-react',
  ],
  plugins: [
    [
      '@babel/plugin-transform-typescript',
      {
        allExtensions: true,
        allowDeclareFields: true,
        isTSX: true,
      },
    ],
    [
      'babel-plugin-transform-import-css',
      {
        generateScopedName: 'ui_[hash:base64:5]',
      },
    ],
  ],
};
