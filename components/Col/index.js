function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import classNames from 'classnames';
var styles = {
  "col": "ui_3rQGD",
  "span-0": "ui_1pGRj",
  "offset-0": "ui_npJyt",
  "span-1": "ui_3VaHG",
  "offset-1": "ui_31f_y",
  "span-2": "ui_2hUwU",
  "offset-2": "ui_xpKOx",
  "span-3": "ui_-4gvF",
  "offset-3": "ui_spq5u",
  "span-4": "ui_1qY5L",
  "offset-4": "ui_20uEF",
  "span-5": "ui_Dr5C-",
  "offset-5": "ui_cbbhA",
  "span-6": "ui_sSssv",
  "offset-6": "ui_24AuR",
  "span-7": "ui_1IIwp",
  "offset-7": "ui_1U6rx",
  "span-8": "ui_3Kj4o",
  "offset-8": "ui_1Vf1T",
  "span-9": "ui_3gBwc",
  "offset-9": "ui_2irE4",
  "span-10": "ui_2QFm8",
  "offset-10": "ui_KE9le",
  "span-11": "ui_3hLbN",
  "offset-11": "ui_1Caeo",
  "span-12": "ui_2aKml",
  "offset-12": "ui_2vZr9"
};
const Col = /*#__PURE__*/forwardRef(({
  span,
  offset,
  className,
  ...props
}, ref) => {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames(styles['col'], span && styles[`span-${span}`], offset && styles[`offset-${offset}`], className),
    ref: ref
  }, props));
});
export default Col;