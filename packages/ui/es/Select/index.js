function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef, createContext } from 'react';
import classnames from 'classnames';

require("./Select.module.build.css");

var styles = {
  "root": "root-113jn",
  "block": "block-2srpd",
  "select": "select-mK-ji",
  "select-withFloatLabel": "select-withFloatLabel-3tZQ_",
  "open-icon": "open-icon-3JxVn",
  "option-placeholder": "option-placeholder-wB_Rz",
  "placeholder": "placeholder-1w8qJ",
  "placeholder-floated": "placeholder-floated-H_MlW"
};
import SelectOption from './components/SelectOption';
export const SelectedValueContext = /*#__PURE__*/createContext(null);
const Select = /*#__PURE__*/forwardRef(({
  selected,
  withFloatLabel,
  block,
  className,
  placeholder,
  children,
  ...props
}, ref) => {
  return /*#__PURE__*/React.createElement(SelectedValueContext.Provider, {
    value: selected
  }, /*#__PURE__*/React.createElement("div", {
    className: classnames(styles['root'], block && styles['block'], className)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "6",
    viewBox: "0 0 11 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: styles['open-icon']
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.5 6C5.5 6 2 4 0 0H11C9 4.00001 5.5 6 5.5 6Z",
    fill: "#34363B"
  })), withFloatLabel && /*#__PURE__*/React.createElement("div", {
    className: classnames(styles['placeholder'], selected && styles['placeholder-floated'])
  }, placeholder), /*#__PURE__*/React.createElement("select", _extends({
    className: classnames(block && styles['block'], withFloatLabel && styles['select-withFloatLabel'], styles['select']),
    ref: ref
  }, props), placeholder && /*#__PURE__*/React.createElement("option", {
    disabled: true,
    selected: true,
    className: styles['option-placeholder']
  }, !withFloatLabel && placeholder), children)));
});
Select.displayName = 'Select';
Select.Option = SelectOption;
export default Select;