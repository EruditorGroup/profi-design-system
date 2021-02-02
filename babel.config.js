const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  presets: ['@babel/preset-react'],
  plugins: [
    [
      '@babel/plugin-transform-typescript',
      {
        allExtensions: true,
        allowDeclareFields: true,
        isTSX: true,
      },
    ],
    isProduction && [
      'css-modules-transform',
      {
        generateScopedName: '[local]_[hash:base64:7]',
        keepImport: true,
        extractCss: {
          dir: './lib',
          relativeRoot: './src/',
          filename: '[path]/[name].css',
        },
      },
    ],
  ].filter(Boolean),
};
