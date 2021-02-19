function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef, useCallback, useState } from 'react';
import classNames from 'classnames';
import Input from "@profiru/ui/components/Input";
var styles = {
  "wrapper": "ui_qiJBy",
  "input": "ui_8nq9v",
  "unit": "ui_3QMsm",
  "unit-withFloatLabel": "ui_IDVZ5",
  "value": "ui_3Zlms",
  "unitOffset": "ui_3YtnU"
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
  }, props)), unit && /*#__PURE__*/React.createElement("div", {
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