function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import classnames from 'classnames';
var styles = {
  "loader": "ui_2oMxT",
  "size-extraSmall": "ui_18hLd",
  "size-large": "ui_38xwW",
  "dot": "ui_2c-dv",
  "dotLoader": "ui_1IQRs",
  "dotDesign-circle": "ui_3Ijod",
  "dotDesign-square": "ui_3LCI3",
  "dotSize-extra-large": "ui_Dbw8a",
  "dotSize-large": "ui_1YZkB",
  "dotSize-medium": "ui_3Bm-v",
  "dotSize-small": "ui_1c795",
  "dotSize-extraSmall": "ui_1tCEH",
  "dotColor-white": "ui_2JHdU",
  "dotColor-gray": "ui_vbJJI"
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