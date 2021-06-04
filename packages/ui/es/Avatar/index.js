function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import classnames from 'classnames';

require("./Avatar.module.build.css");

var styles = {
  "avatar": "avatar-1iXtc",
  "design-circle": "design-circle-4LhNz",
  "onlineDot": "onlineDot-LqpiJ",
  "design-rect": "design-rect-j6qVY"
};

require("../styles/common.module.build.css");

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
const Avatar = /*#__PURE__*/forwardRef(({
  size,
  style,
  isOnline,
  design = 'circle',
  src,
  username,
  className,
  ...props
}, ref) => {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    style: src ? {
      backgroundImage: `url(${src})`,
      ...style
    } : style,
    className: classnames(styles['avatar'], size && common[`size-${size}`], styles[`design-${design}`], className)
  }, props), !src && (username === null || username === void 0 ? void 0 : username.slice(0, 1)), isOnline && /*#__PURE__*/React.createElement("i", {
    className: styles['onlineDot']
  }));
});
export default Avatar;