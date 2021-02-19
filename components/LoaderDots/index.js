function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import classnames from 'classnames';
var styles = {
  "loader": "loader-2oMxT",
  "size-extraSmall": "size-extraSmall-18hLd",
  "size-large": "size-large-38xwW",
  "dot": "dot-2c-dv",
  "dotLoader": "dotLoader-1IQRs",
  "dotDesign-circle": "dotDesign-circle-3Ijod",
  "dotDesign-square": "dotDesign-square-3LCI3",
  "dotSize-extra-large": "dotSize-extra-large-Dbw8a",
  "dotSize-large": "dotSize-large-1YZkB",
  "dotSize-medium": "dotSize-medium-3Bm-v",
  "dotSize-small": "dotSize-small-1c795",
  "dotSize-extraSmall": "dotSize-extraSmall-1tCEH",
  "dotColor-white": "dotColor-white-2JHdU",
  "dotColor-gray": "dotColor-gray-vbJJI"
};
const LoaderDots = /*#__PURE__*/forwardRef(({
  size = 'medium',
  design = 'square',
  animation = 'scale',
  color = 'white',
  ...props
}, ref) => /*#__PURE__*/React.createElement("div", _extends({
  className: classnames(styles['loader'], styles[`size-${size}`], styles[`design-${design}`]),
  ref: ref
}, props), Array.from({
  length: 3
}).map((_, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  className: [styles['dot'], styles[`dotAnimation-${animation}`], styles[`dotDesign-${design}`], styles[`dotSize-${size}`], styles[`dotColor-${color}`]].join(' ')
}))));
export default LoaderDots;