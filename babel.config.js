const extractCss = !!process.env.EXTRACT_CSS;

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
    extractCss && [
      'css-modules-transform',
      {
        generateScopedName: '[local]_[hash:base64:7]',
        extractCss: './dist/ui.css',
      },
    ],
  ].filter(Boolean),
};
