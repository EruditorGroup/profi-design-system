function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, useState } from 'react';
import classnames from 'classnames';
import BareInput from '../BareInput';

require("./BareInputUnit.module.build.css");

var styles = {
  "input-unit": "input-unit-H3t8P",
  "input-unit__input": "input-unit__input-dPZf2",
  "input-unit__stretcher": "input-unit__stretcher-3_4Zb",
  "input-unit__value": "input-unit__value-vLaDY"
};

const BareInputUnit = ({
  unit,
  unitClassName,
  unitStyle,
  value,
  defaultValue,
  placeholder,
  className,
  onChange,
  inputRef,
  ...props
}) => {
  var _ref;

  const [inputValue, setInputValue] = useState((_ref = value !== null && value !== void 0 ? value : defaultValue) !== null && _ref !== void 0 ? _ref : '');
  const unitRef = useRef(null);

  const _onChange = evt => {
    const numericValue = evt.target.value.replace(/[^\d]/g, '');
    if (numericValue === inputValue) return;
    evt.target.value = numericValue;
    onChange && onChange(evt);
    setInputValue(numericValue);
  };

  const overflowUnitPadStyles = {
    paddingRight: unitRef.current ? `${unitRef.current.getBoundingClientRect().width + 4}px` : undefined
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(styles['input-unit']),
    style: overflowUnitPadStyles
  }, /*#__PURE__*/React.createElement(BareInput, _extends({
    inputRef: inputRef
  }, props, {
    value: inputValue,
    placeholder: placeholder,
    className: classnames(styles['input-unit__input'], className),
    onChange: _onChange
  })), /*#__PURE__*/React.createElement("div", {
    className: classnames(styles['input-unit__stretcher'])
  }, /*#__PURE__*/React.createElement("span", {
    className: styles['input-unit__value']
  }, inputValue), /*#__PURE__*/React.createElement("span", {
    ref: unitRef,
    className: classnames(styles['input-unit__unit'], unitClassName),
    style: unitStyle
  }, !placeholder || inputValue ? unit : '')));
};

export default BareInputUnit;