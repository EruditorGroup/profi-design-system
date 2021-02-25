const sass = require('node-sass');
const fs = require('fs');
const package = require('./package.json');
const {CSS_MODULE_LOCAL_IDENT_NAME_GENERATOR} = require('./.config');

// Should we replace style imports into css-modules classes mapping?
// NOTE: it isn`t generate any css bundles. If you need change something in styles bundling, check webpack config.
const transformCssImports = !!process.env.CSS_MODULES;

// Production flag, used in a few plugins/presets
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  presets: [
    process.env.MODULE_TYPE === 'cjs' && [
      '@babel/preset-env',
      {
        targets: {node: 'current'},
      },
    ],
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
              // rename internal imports by src/ folder content
              // e.x: components/Button will resolved as {package.name}/src/components/Button
              original: folder,
              replacement: process.env.MODULE_TYPE
                ? `${package.name}/dist/${process.env.MODULE_TYPE}/${folder}`
                : `${package.name}/src/${folder}`,
            },
          ],
          [
            // by default, webpack will exports all styles in dist/main.css
            // so we add default replacement for styles importing with package name prefix
            transformCssImports && {
              original: './styles/theme.scss',
              replacement: `${package.name}/dist/main.css`,
            },
          ].filter(Boolean),
        ),
      },
    ],
    transformCssImports && [
      'css-modules-transform',
      {
        devMode: !isProduction,
        keepImport: false,
        generateScopedName: (localName, filePath) => {
          return CSS_MODULE_LOCAL_IDENT_NAME_GENERATOR(localName, filePath);
        },
        // extractCss: './dist/main.css',
        extensions: ['.css', '.scss'],
        preprocessCss: (css, path) => {
          console.log(path);
          return sass
            .renderSync({
              data: css,
            })
            .css.toString('utf8');
        },
      },
    ],
  ].filter(Boolean),
};
