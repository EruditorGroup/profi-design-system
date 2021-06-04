function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import classnames from 'classnames';

require("./Button.module.build.css");

var styles = {
  "button": "button-2QW3c",
  "content": "content-3vUWP",
  "icon": "icon-3lsDn",
  "icon-withMargin": "icon-withMargin-C-Tod",
  "design-primary": "design-primary-2Abw3",
  "design-secondary": "design-secondary-2vz2O",
  "design-light": "design-light-2VriV",
  "design-transparent": "design-transparent-1MjKu",
  "design-fb": "design-fb-TnTwL",
  "design-ya": "design-ya-1YROP",
  "design-vk": "design-vk-1L6DH",
  "size-s": "size-s-3Yi-C",
  "rounded": "rounded-_sBR4",
  "size-m": "size-m-3aY4S",
  "size-l": "size-l-_HiyL",
  "block": "block-2QS_i",
  "leading": "leading-1HJJN",
  "trailing": "trailing-2-Fsq",
  "design-link": "design-link-2m_jv",
  "regular": "regular-3vOd5"
};
const Button = /*#__PURE__*/forwardRef(({
  design = 'primary',
  size = 'm',
  type = 'button',
  rounded = false,
  block = false,
  as: Component = 'button',
  children,
  className,
  contentClassName,
  leading,
  trailing,
  regular,
  ...props
}, ref) => {
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: ref,
    type: type,
    className: classnames(styles['button'], styles[`design-${design}`], styles[`size-${size}`], block && styles[`block`], rounded && styles[`rounded`], regular && styles[`regular`], className)
  }, props), leading && /*#__PURE__*/React.createElement("span", {
    className: styles['leading']
  }, leading), /*#__PURE__*/React.createElement("span", {
    className: classnames(styles['content'], contentClassName)
  }, children), trailing && /*#__PURE__*/React.createElement("span", {
    className: styles['trailing']
  }, trailing));
});
export default Button;