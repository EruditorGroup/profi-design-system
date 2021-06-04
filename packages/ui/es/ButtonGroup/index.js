function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import classnames from 'classnames';

require("./ButtonGroup.module.build.css");

var styles = {
  "group": "group-21Fth",
  "block": "block-27kIq"
};
const ButtonGroup = /*#__PURE__*/forwardRef(({
  className,
  block,
  ...props
}, ref) => {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: classnames(styles['group'], block && styles['block'], className)
  }, props));
});
export default ButtonGroup;