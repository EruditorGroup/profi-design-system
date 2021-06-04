function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import TextBase from './components/TextBase';
const Text = /*#__PURE__*/forwardRef(function Text({
  size,
  bold = false,
  as = 'p',
  ...props
}, ref) {
  return /*#__PURE__*/React.createElement(TextBase, _extends({
    as: as,
    size: size,
    bold: bold
  }, props, {
    ref: ref
  }));
});
export default Text;