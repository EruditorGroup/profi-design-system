const withCssExports = !!process.env.EXPORT_CSS;

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
    withCssExports && [
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
