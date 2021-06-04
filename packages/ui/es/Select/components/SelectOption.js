function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef, useContext } from 'react';
import { SelectedValueContext } from '../../Select';
const SelectOption = /*#__PURE__*/forwardRef(({
  value,
  ...props
}, ref) => {
  const selectedValue = useContext(SelectedValueContext);
  return /*#__PURE__*/React.createElement("option", _extends({
    ref: ref,
    value: value
  }, props, {
    selected: value === selectedValue
  }));
});
SelectOption.displayName = 'SelectOption';
export default SelectOption;