function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
var styles = {
  "wrapper": "wrapper-2iTSS"
};
const Wrapper = /*#__PURE__*/forwardRef(({
  className,
  ...props
}, ref) => {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `${styles['wrapper']} ${className}`,
    ref: ref
  }, props));
});
export default Wrapper;