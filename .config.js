const fs = require('fs');
const path = require('path');

const PACKAGES_PATH = path.resolve(__dirname, 'packages');

module.exports = {
  CSS_MODULE_LOCAL_IDENT_NAME_GENERATOR: require('generic-names')(
    process.env.NODE_ENV === 'production'
      ? 'ui_[hash:base64:5]'
      : '[local]-[hash:base64:5]',
  ),
  GET_PACKEGES_INFO() {
    return fs
      .readdirSync(PACKAGES_PATH)
      .map((p) => path.resolve(PACKAGES_PATH, p, 'package.json'))
      .filter(fs.existsSync)
      .map((infoPath) => {
        const info = require(infoPath);
        const packagePath = path.resolve(infoPath, '..');
        const themePath = path.resolve(packagePath, 'src/styles/theme.css');
        return {
          name: info.name,
          path: packagePath,
          themePath: fs.existsSync(themePath) && themePath,
          libName: info.eruditorgroup.libName,
          libFilename: info.eruditorgroup.libFilename,
        };
      });
  },
};
