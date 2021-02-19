function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import classnames from 'classnames';
var styles = {
  "label": "ui_QwxPG",
  "checker": "ui_3r_66",
  "design-brand": "ui_3JT3T",
  "input": "ui_3BKOi",
  "content": "ui_3v8cW"
}; // export interface CheckboxProps {
//   design?: 'brand';
// }

const Checkbox = /*#__PURE__*/forwardRef(({
  // design='brand',
  children,
  className,
  key,
  style,
  ...props
}, ref) => {
  return /*#__PURE__*/React.createElement("label", {
    style: style,
    key: key,
    className: classnames(styles['label'], className)
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    className: styles['input'],
    type: "checkbox"
  }, props)), /*#__PURE__*/React.createElement("i", {
    className: classnames(styles['checker'], styles[`design-brand`])
  }), /*#__PURE__*/React.createElement("div", {
    className: styles['content']
  }, children));
});
export default Checkbox;