function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import TextBase from './components/TextBase';
const Text = /*#__PURE__*/forwardRef(({
  size = 'xxl',
  bold = true,
  level = 3,
  ...props
}, ref) => {
  return /*#__PURE__*/React.createElement(TextBase, _extends({
    as: `h${level}`,
    size: size,
    bold: bold
  }, props, {
    ref: ref
  }));
});
export default Text;