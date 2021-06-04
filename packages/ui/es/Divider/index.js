function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import classNames from 'classnames';

require("./Divider.module.build.css");

var styles = {
  "divider": "divider-1ffGf",
  "fit": "fit-3tLtz"
};
const Divider = /*#__PURE__*/forwardRef(({
  fit = false,
  className,
  ...props
}, ref) => {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames(styles['divider'], fit && styles['fit'], className),
    ref: ref
  }, props));
});
export default Divider;