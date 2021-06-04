function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import classNames from 'classnames';

require("./TextBase.module.build.css");

var styles = {
  "text": "text-39nQo",
  "bold": "bold-1dviW",
  "color-text-muted": "color-text-muted-1c1T2"
};

require("../../styles/common.module.build.css");

var common = {
  "color-brand": "color-brand-h5Cyd",
  "color-primary": "color-primary-A7lMg",
  "color-secondary": "color-secondary-2cS18",
  "color-light": "color-light-2laSu",
  "color-danger": "color-danger-12hTX",
  "color-success": "color-success-2wEne",
  "color-warning": "color-warning-Hpz_8",
  "size-xs": "size-xs-3yjq_",
  "size-s": "size-s-3zQju",
  "size-m": "size-m-2guU_",
  "size-l": "size-l-2R6Zj",
  "size-xl": "size-xl-3UmLL",
  "size-xxl": "size-xxl-2nH5c",
  "size-huge": "size-huge-1MGuM"
};
const TextBase = /*#__PURE__*/forwardRef(({
  bold,
  size,
  color = 'secondary',
  as: Component,
  className,
  ...props
}, ref) => {
  return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
    ref: ref,
    className: classNames(styles['text'], common[`color-${color}`], size && common[`size-${size}`], {
      [styles[`bold`]]: bold,
      [styles[`color-text-muted`]]: color === 'muted'
    }, className)
  }));
});
export default TextBase;