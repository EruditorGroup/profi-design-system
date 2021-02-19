function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef, useCallback } from 'react';
import InputMask from 'react-input-mask';
import classnames from 'classnames';
import useFloatLabel from './hooks/useFloatLabel';
var styles = {
  "form-control": "ui_Lx7RP",
  "input": "ui_1i6bi",
  "input-withFloatLabel": "ui_s-47i",
  "block": "ui_4yS0x",
  "floatLabel": "ui_1azX-",
  "floatLabel-floated": "ui_3ADge"
};
const Input = /*#__PURE__*/forwardRef(({
  className,
  placeholder,
  withFloatLabel,
  block = true,
  mask,
  onFocus,
  onBlur,
  ...props
}, ref) => {
  const [isFloated, onFocusProxy, onBlurProxy] = useFloatLabel(onFocus, onBlur);
  const InputComponent = useCallback(inputProps => {
    return mask ? /*#__PURE__*/React.createElement(InputMask, _extends({}, inputProps, {
      mask: mask
    })) : /*#__PURE__*/React.createElement("input", inputProps);
  }, [mask]);
  return /*#__PURE__*/React.createElement("div", {
    className: styles['form-control']
  }, withFloatLabel && /*#__PURE__*/React.createElement("label", {
    className: classnames(styles['floatLabel'], block && styles['block'], isFloated && styles['floatLabel-floated'])
  }, placeholder), InputComponent({
    ref,
    onFocus: onFocusProxy,
    onBlur: onBlurProxy,
    placeholder: withFloatLabel ? '' : placeholder,
    className: classnames(styles['input'], withFloatLabel && styles['input-withFloatLabel'], className),
    ...props
  }));
});
export default Input;