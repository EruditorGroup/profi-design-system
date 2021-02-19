function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import classnames from 'classnames';
var styles = {
  "link": "ui_2u5hO",
  "color-brand": "ui_11JkP",
  "color-inherit": "ui_2w4JD",
  "color-white": "ui_32uMm",
  "color-medium-grey": "ui_2njGi",
  "color-dark-grey": "ui_3daTz",
  "color-black": "ui_2TSwB",
  "size-13": "ui_3gF7G",
  "size-14": "ui_1acFb",
  "size-15": "ui_cbaUO",
  "size-16": "ui_24fQ4",
  "size-17": "ui_3u84w",
  "size-18": "ui_1q0fp",
  "size-20": "ui_iYjh2",
  "size-24": "ui_2UUQz",
  "size-30": "ui_3i5Yg",
  "lineHeight-140": "ui_MvAJI",
  "lineHeight-125": "ui_yt4tR",
  "lineHeight-120": "ui_2pZ9d",
  "lineHeight-100": "ui_3G9yQ",
  "underlined": "ui_22aQQ",
  "block": "ui_1Mas7",
  "font-bold": "ui_T6hWr",
  "design-bullet": "ui_1Nod9",
  "design-tag": "ui_4h4IU",
  "link_grayTag": "ui_2ZAPM",
  "link_whiteTag": "ui_lnOsE",
  "link_whiteTag_active": "ui_cV8wD",
  "disabled": "ui_2LH8j"
};
const Link = /*#__PURE__*/forwardRef(({
  to: href,
  disabled,
  block = false,
  underlined = false,
  bold = false,
  design = 'default',
  color = 'default',
  size,
  lineHeight,
  className,
  children,
  ...props
}, ref) => {
  return /*#__PURE__*/React.createElement("a", _extends({
    ref: ref,
    href: disabled ? undefined : href,
    className: classnames(styles['link'], underlined && styles['underlined'], disabled && styles['disabled'], design && styles[`design-${design}`], bold && styles[`bold`], block && styles['block'], color && styles[`color-${color}`], size && styles[`size-${size}`], lineHeight && styles[`lineHeight-${lineHeight}`], className)
  }, props), children);
});
export default Link;