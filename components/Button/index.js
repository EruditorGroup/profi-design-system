function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import classnames from 'classnames';
import LoaderDots from '../LoaderDots';
var styles = {
  "button": "ui_2t432",
  "design-primary": "ui_11LTX",
  "design-secondary": "ui_2EfGF",
  "design-light": "ui_3HO4k",
  "design-facebook": "ui_3mPiv",
  "design-yandex": "ui_Aa9_b",
  "design-vk": "ui_2lMjr",
  "size-small": "ui_ewZVI",
  "size-normal": "ui_3RiKO",
  "size-large": "ui_PgCim",
  "block": "ui_34kbB",
  "fit": "ui_1tawG"
};
const Button = /*#__PURE__*/forwardRef(({
  design = 'primary',
  size = 'normal',
  block = false,
  disabled,
  isLoading = false,
  fit = false,
  // без отступов
  children,
  className,
  ...props
}, ref) => {
  return /*#__PURE__*/React.createElement("button", _extends({
    ref: ref,
    disabled: isLoading || disabled,
    className: classnames(styles['button'], styles[`design-${design}`], styles[`size-${size}`], fit && styles['fit'], block && styles[`block`], className)
  }, props), isLoading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LoaderDots, null), children) : children);
});
export default Button;