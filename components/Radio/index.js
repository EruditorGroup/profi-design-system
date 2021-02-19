function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import classnames from 'classnames';
var styles = {
  "label": "ui_3mVdI",
  "checker": "ui_3gUsk",
  "design-brand": "ui_4S4zG",
  "input": "ui_1y39W",
  "content": "ui_glhin"
}; // export interface RadioProps {
//   design?: 'light' | 'brand';
// }

const Radio = /*#__PURE__*/forwardRef(({
  // design = 'brand',
  children,
  className,
  style,
  ...props
}, ref) => {
  return /*#__PURE__*/React.createElement("label", {
    style: style,
    className: classnames(styles['label'], className)
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    className: styles['input'],
    type: "radio"
  }, props)), /*#__PURE__*/React.createElement("i", {
    className: classnames(styles['checker'], styles[`design-brand`])
  }), /*#__PURE__*/React.createElement("div", {
    className: styles['content']
  }, children));
});
export default Radio;