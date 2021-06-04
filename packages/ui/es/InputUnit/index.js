function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef, useCallback, useState } from 'react';
import classNames from 'classnames';
import Input from '../Input';

require("./InputUnit.module.build.css");

var styles = {
  "wrapper": "wrapper-1euO-",
  "input": "input-29WL8",
  "unit": "unit-2PB0f",
  "unit-withFloatLabel": "unit-withFloatLabel-3x3g3",
  "value": "value-fjLCw",
  "unitOffset": "unitOffset-2boyp"
};
const InputUnit = /*#__PURE__*/forwardRef(({
  unit,
  placeholder,
  withFloatLabel,
  onKeyUp,
  ...props
}, ref) => {
  const [value, setValue] = useState('');

  const _onChange = useCallback(ev => {
    if (onKeyUp) onKeyUp(ev);
    setValue(ev.target.value.replace(/[^\d]/g, ''));
  }, [onKeyUp]);

  return /*#__PURE__*/React.createElement("div", {
    className: classNames(styles['wrapper'], styles)
  }, /*#__PURE__*/React.createElement(Input, _extends({
    onChange: _onChange,
    value: value,
    className: styles['input'],
    ref: ref,
    withFloatLabel: withFloatLabel,
    placeholder: placeholder
  }, props)), /*#__PURE__*/React.createElement("div", {
    className: classNames(styles['unit'], {
      [styles['unit-withFloatLabel']]: placeholder && withFloatLabel
    })
  }, /*#__PURE__*/React.createElement("span", {
    className: styles['value']
  }, value), /*#__PURE__*/React.createElement("span", {
    className: styles['unitOffset']
  }), !placeholder || value ? unit : ''));
});
export default InputUnit;