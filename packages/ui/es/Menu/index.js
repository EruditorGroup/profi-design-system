function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import classnames from 'classnames';
import MenuItem from './components/MenuItem';

require("./Menu.module.build.css");

var styles = {
  "rounded": "rounded-3Offy"
};
// additional type cast to flowgen
const Menu = /*#__PURE__*/forwardRef(({
  className,
  ...props
}, ref) => {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classnames(styles['menu'], className),
    ref: ref
  }, props));
});
Menu.Item = MenuItem;
export default Menu;