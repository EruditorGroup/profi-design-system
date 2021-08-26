const fs = require('fs');
const path = require('path');

const PACKAGES_PATH = path.resolve(__dirname, 'packages');

module.exports = {
  CSS_MODULE_LOCAL_IDENT_NAME_GENERATOR: require('generic-names')(
    process.env.NODE_ENV === 'production'
      ? 'ui_[hash:base64:5]'
      : '[local]-[hash:base64:5]',
  ),
};
