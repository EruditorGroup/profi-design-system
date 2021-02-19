function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import classNames from 'classnames';
var styles = {
  "col": "col-3rQGD",
  "span-0": "span-0-1pGRj",
  "offset-0": "offset-0-npJyt",
  "span-1": "span-1-3VaHG",
  "offset-1": "offset-1-31f_y",
  "span-2": "span-2-2hUwU",
  "offset-2": "offset-2-xpKOx",
  "span-3": "span-3--4gvF",
  "offset-3": "offset-3-spq5u",
  "span-4": "span-4-1qY5L",
  "offset-4": "offset-4-20uEF",
  "span-5": "span-5-Dr5C-",
  "offset-5": "offset-5-cbbhA",
  "span-6": "span-6-sSssv",
  "offset-6": "offset-6-24AuR",
  "span-7": "span-7-1IIwp",
  "offset-7": "offset-7-1U6rx",
  "span-8": "span-8-3Kj4o",
  "offset-8": "offset-8-1Vf1T",
  "span-9": "span-9-3gBwc",
  "offset-9": "offset-9-2irE4",
  "span-10": "span-10-2QFm8",
  "offset-10": "offset-10-KE9le",
  "span-11": "span-11-3hLbN",
  "offset-11": "offset-11-1Caeo",
  "span-12": "span-12-2aKml",
  "offset-12": "offset-12-2vZr9"
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