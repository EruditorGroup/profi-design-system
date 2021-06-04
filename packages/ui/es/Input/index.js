function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef, useCallback } from 'react';
import InputMask from 'react-input-mask';
import classnames from 'classnames';
import useFloatLabel from './hooks/useFloatLabel';

require("./Input.module.build.css");

var styles = {
  "form-control": "form-control-2sjws",
  "input": "input-2tqZz",
  "input-withFloatLabel": "input-withFloatLabel-2b6k5",
  "block": "block-1NYbn",
  "floatLabel": "floatLabel-txFNZ",
  "floatLabel-floated": "floatLabel-floated-3XKfR"
};
const Input = /*#__PURE__*/forwardRef(({
  className,
  placeholder,
  withFloatLabel,
  block = true,
  value,
  mask,
  onFocus,
  onBlur,
  ...props
}, ref) => {
  const [isFloated, focusProps] = useFloatLabel(Boolean(value), {
    onFocus,
    onBlur
  });
  const InputComponent = useCallback(inputProps => {
    return mask ? /*#__PURE__*/React.createElement(InputMask, _extends({}, inputProps, {
      inputRef: el => {
        if (typeof ref === 'function') {
          ref(el);
        } else if (typeof ref === 'object' && ref !== null) {
          ref.current = el;
        }
      },
      mask: mask
    })) : /*#__PURE__*/React.createElement("input", _extends({}, inputProps, {
      ref: ref
    }));
  }, [mask, ref]);
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(styles['form-control'], className)
  }, withFloatLabel && /*#__PURE__*/React.createElement("label", {
    className: classnames(styles['floatLabel'], block && styles['block'], isFloated && styles['floatLabel-floated'])
  }, placeholder), InputComponent({
    value,
    placeholder: withFloatLabel ? '' : placeholder,
    className: classnames(styles['input'], withFloatLabel && styles['input-withFloatLabel']),
    ...focusProps,
    ...props
  }));
});
export default Input;