function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import classnames from 'classnames';
var styles = {
  "link": "link-2u5hO",
  "color-brand": "color-brand-11JkP",
  "color-inherit": "color-inherit-2w4JD",
  "color-white": "color-white-32uMm",
  "color-medium-grey": "color-medium-grey-2njGi",
  "color-dark-grey": "color-dark-grey-3daTz",
  "color-black": "color-black-2TSwB",
  "size-13": "size-13-3gF7G",
  "size-14": "size-14-1acFb",
  "size-15": "size-15-cbaUO",
  "size-16": "size-16-24fQ4",
  "size-17": "size-17-3u84w",
  "size-18": "size-18-1q0fp",
  "size-20": "size-20-iYjh2",
  "size-24": "size-24-2UUQz",
  "size-30": "size-30-3i5Yg",
  "lineHeight-140": "lineHeight-140-MvAJI",
  "lineHeight-125": "lineHeight-125-yt4tR",
  "lineHeight-120": "lineHeight-120-2pZ9d",
  "lineHeight-100": "lineHeight-100-3G9yQ",
  "underlined": "underlined-22aQQ",
  "block": "block-1Mas7",
  "font-bold": "font-bold-T6hWr",
  "design-bullet": "design-bullet-1Nod9",
  "design-tag": "design-tag-4h4IU",
  "link_grayTag": "link_grayTag-2ZAPM",
  "link_whiteTag": "link_whiteTag-lnOsE",
  "link_whiteTag_active": "link_whiteTag_active-cV8wD",
  "disabled": "disabled-2LH8j"
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