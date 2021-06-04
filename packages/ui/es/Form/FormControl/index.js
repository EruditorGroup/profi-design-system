function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import classnames from 'classnames';

require("./FormControl.module.build.css");

var styles = {
  "form-control": "form-control-Z643L",
  "form-control_block": "form-control_block-1Pr0i",
  "form-control_disabled": "form-control_disabled-PGl8I",
  "form-control_invalid": "form-control_invalid-kMDKc",
  "form-control_s": "form-control_s-318XF",
  "form-control_m": "form-control_m-2rTnS",
  "form-control_withLabel_m": "form-control_withLabel_m-2XeA9",
  "form-control_l": "form-control_l-3nXFW",
  "form-control_withLabel_l": "form-control_withLabel_l-1ME_V",
  "form-control_xl": "form-control_xl-3dBxZ",
  "form-control__flex": "form-control__flex-dQatb",
  "form-control__infix": "form-control__infix-2qhBo",
  "form-control__infix_withLabel": "form-control__infix_withLabel-2-v65",
  "form-control__prefix": "form-control__prefix-2jU8E",
  "form-control__suffix": "form-control__suffix-197yH",
  "form-control__label": "form-control__label-IaLFg",
  "form-control__label_floated": "form-control__label_floated-1YiIk"
};

const FormControl = ({
  className,
  label,
  withFloatLabel,
  isLabelFloated,
  size = 'l',
  block = true,
  labelFor,
  invalid,
  disabled,
  leading,
  trailing,
  children,
  onClick,
  ...props
}) => {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classnames(styles['form-control'], styles[`form-control_${size}`], withFloatLabel && styles[`form-control_withLabel_${size}`], block && styles['form-control_block'], disabled && styles['form-control_disabled'], invalid && styles['form-control_invalid'], className),
    onClick: onClick
  }, props), /*#__PURE__*/React.createElement("div", {
    className: styles['form-control__flex']
  }, leading && /*#__PURE__*/React.createElement("div", {
    className: styles['form-control__prefix']
  }, leading), /*#__PURE__*/React.createElement("div", {
    className: classnames(styles['form-control__infix'], withFloatLabel && styles['form-control__infix_withLabel'])
  }, withFloatLabel && /*#__PURE__*/React.createElement("label", {
    className: classnames(styles['form-control__label'], isLabelFloated && styles['form-control__label_floated']),
    htmlFor: labelFor
  }, label), children), trailing && /*#__PURE__*/React.createElement("div", {
    className: styles['form-control__suffix']
  }, trailing)));
};

export default FormControl;