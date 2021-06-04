function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import cx from 'classnames';

require("./Container.module.build.css");

var styles = {
  "container": "container-Kv-Kl"
};
const Container = /*#__PURE__*/forwardRef(function Container({
  children,
  className,
  ...props
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    ref: ref,
    className: cx(className, styles['container'])
  }), children);
});
export default Container;