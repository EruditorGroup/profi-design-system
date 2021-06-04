function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import classnames from 'classnames';

require("./Row.module.build.css");

var styles = {
  "row": "ui_2phyn"
};
const Row = /*#__PURE__*/forwardRef(({
  className,
  ...props
}, ref) => {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classnames(styles['row'], className),
    ref: ref
  }, props));
});
export default Row;