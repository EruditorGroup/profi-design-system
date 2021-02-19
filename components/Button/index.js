function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import classnames from 'classnames';
import LoaderDots from '../LoaderDots';
var styles = {
  "button": "button-2t432",
  "design-primary": "design-primary-11LTX",
  "design-secondary": "design-secondary-2EfGF",
  "design-light": "design-light-3HO4k",
  "design-facebook": "design-facebook-3mPiv",
  "design-yandex": "design-yandex-Aa9_b",
  "design-vk": "design-vk-2lMjr",
  "size-small": "size-small-ewZVI",
  "size-normal": "size-normal-3RiKO",
  "size-large": "size-large-PgCim",
  "block": "block-34kbB",
  "fit": "fit-1tawG"
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