function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import classnames from 'classnames';

require("./Wrapper.module.build.css");

var styles = {
  "wrapper": "wrapper-D2TmM",
  "bg-grey": "bg-grey-18tQS",
  "bg-white": "bg-white-5kaUN"
};
const Wrapper = /*#__PURE__*/forwardRef(({
  className,
  bg = 'grey',
  ...props
}, ref) => {
  return /*#__PURE__*/React.createElement("div", {
    className: styles[`bg-${bg}`]
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: classnames(styles['wrapper'], className),
    ref: ref
  }, props)));
});
export default Wrapper;