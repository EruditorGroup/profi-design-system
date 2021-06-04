function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import classnames from 'classnames';

require("./Loader.module.build.css");

var styles = {
  "loader": "loader-1On0C",
  "size-extraSmall": "size-extraSmall-29CXI",
  "size-large": "size-large-1HoWM",
  "dot": "dot-jXZDZ",
  "dotLoader": "dotLoader-3Bc3j",
  "dotDesign-circle": "dotDesign-circle-3H_aZ",
  "dotDesign-square": "dotDesign-square-3Hp1d",
  "dotSize-extra-large": "dotSize-extra-large-3rFXM",
  "dotSize-large": "dotSize-large-2gkD2",
  "dotSize-medium": "dotSize-medium-r86Im",
  "dotSize-small": "dotSize-small-2z0V7",
  "dotSize-extraSmall": "dotSize-extraSmall-1sRSH",
  "dotColor-white": "dotColor-white-1Nns-",
  "dotColor-gray": "dotColor-gray-2y8kj"
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