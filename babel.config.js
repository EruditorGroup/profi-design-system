const sass = require('node-sass');

const extractCss = !!process.env.EXTRACT_CSS;
const isProduction = process.env.NODE_ENV === 'production';
const isTest = process.env.NODE_ENV === 'test';

module.exports = {
  presets: [
    isTest && ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-react',
  ].filter(Boolean),
  plugins: [
    [
      '@babel/plugin-transform-typescript',
      {
        allExtensions: true,
        allowDeclareFields: true,
        isTSX: true,
      },
    ],
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    extractCss && [
      'css-modules-transform',
      {
        devMode: !isProduction,
        keepImport: false,
        generateScopedName: 'ui_[hash:base64:5]',
        extractCss: './dist/ui.css',
        extensions: ['.css', '.scss'],
        preprocessCss: (css) => {
          return sass
            .renderSync({
              data: css,
            })
            .css.toString();
        },
      },
    ],
  ].filter(Boolean),
};
