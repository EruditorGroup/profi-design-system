const sass = require('node-sass');
const fs = require('fs');
const package = require('./package.json');
const {CSS_MODULE_LOCAL_IDENT_NAME_GENERATOR} = require('./.config');

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
    [
      'transform-rename-import',
      {
        replacements: fs.readdirSync('./src').reduce(
          (replacements, folder) => [
            ...replacements,
            {
              original: folder,
              replacement: `${package.name}/${folder}`,
            },
          ],
          [],
        ),
      },
    ],
    extractCss && [
      'css-modules-transform',
      {
        devMode: !isProduction,
        keepImport: false,
        generateScopedName: (localName, filePath) => {
          return CSS_MODULE_LOCAL_IDENT_NAME_GENERATOR(localName, filePath);
        },
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
