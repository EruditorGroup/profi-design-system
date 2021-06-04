function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import classnames from 'classnames';

require("./Link.module.build.css");

var styles = {
  "link": "link-1hi7c",
  "disabled": "disabled-1d8d_",
  "underlined": "underlined-1DQpj",
  "block": "block-24uQM",
  "bold": "bold-2DEzT"
};
const Link = /*#__PURE__*/forwardRef(({
  to: href,
  underlined,
  block,
  bold,
  disabled,
  className,
  ...props
}, ref) => {
  return /*#__PURE__*/React.createElement("a", _extends({
    ref: ref,
    href: href,
    className: classnames(styles['link'], block && styles['block'], disabled && styles['disabled'], underlined && styles['underlined'], bold && styles['bold'], className)
  }, props));
});
export default Link;