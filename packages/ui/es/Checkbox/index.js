function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import cx from 'classnames';
import { DotIcon, CheckIcon } from '@eruditorgroup/profi-icons';
import { Text } from '..';

require("./Checkbox.module.build.css");

var styles = {
  "label": "label-2tyyJ",
  "checkbox": "checkbox-E1Wpv",
  "checkbox_size-m": "checkbox_size-m-O2h7l",
  "checkbox_size-l": "checkbox_size-l-3PRpv",
  "checkbox_size-xl": "checkbox_size-xl-ZREY3",
  "checkbox_size-xxl": "checkbox_size-xxl-1HCes",
  "checkbox_type-radio": "checkbox_type-radio-2gNH8",
  "input": "input-AArKW",
  "content_size-m": "content_size-m-3QXVW",
  "content_size-l": "content_size-l-Qnug0",
  "content_size-xl": "content_size-xl-3teUt",
  "content_size-xxl": "content_size-xxl-3Ursa",
  "content": "content-3c0Cu"
};
export const getTextSize = size => ['xxl', 'xl', 'l'].includes(size) ? 'l' : 'm';
const Checkbox = /*#__PURE__*/forwardRef(function Checkbox({
  label,
  type = 'checkbox',
  size = 'm',
  children,
  className,
  style,
  ...props
}, ref) {
  const isRadio = type === 'radio';
  const Icon = isRadio ? DotIcon : CheckIcon;
  const labelText = children !== null && children !== void 0 ? children : label;
  return /*#__PURE__*/React.createElement("label", {
    style: style,
    className: cx(className, styles['label'])
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    className: styles['input'],
    type: type
  }, props)), /*#__PURE__*/React.createElement("span", {
    className: cx(styles['checkbox'], styles[`checkbox_size-${size}`], isRadio && styles['checkbox_type-radio'])
  }, /*#__PURE__*/React.createElement(Icon, null)), labelText && /*#__PURE__*/React.createElement(Text, {
    as: "span",
    size: getTextSize(size),
    className: cx(styles['content'], styles[`content_size-${size}`])
  }, labelText));
});
export default Checkbox;