function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import classnames from 'classnames';

require("./MenuItem.module.build.css");

var styles = {
  "item": "item-31lWS",
  "rounded": "rounded-2f4rM",
  "design-light": "design-light-3FCYu",
  "current": "current-GGE42",
  "disabled": "disabled-3Di1y",
  "divided": "divided-22Gwf"
};
const MenuItem = /*#__PURE__*/forwardRef(({
  to,
  rounded = true,
  current = false,
  disabled = false,
  divided = false,
  className,
  ...props
}, ref) => {
  return /*#__PURE__*/React.createElement("a", _extends({
    className: classnames(styles['item'], divided && styles['divided'], disabled && styles['disabled'], styles['design-light'], rounded && styles['rounded'], current && styles['current'], className),
    href: to,
    ref: ref
  }, props));
});
export default MenuItem;