function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import cx from 'classnames';

require("./Row.module.build.css");

var styles = {
  "row": "row-1q6sj"
};
const Row = /*#__PURE__*/forwardRef(function Row({
  children,
  className,
  ...props
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    ref: ref,
    className: cx(className, styles['row'])
  }), children);
});
export default Row;