function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useCallback } from 'react';
import InputMask from 'react-input-mask';
import classnames from 'classnames';

require("./BareInput.module.build.css");

var styles = {
  "input": "input-27dTD"
};

const BareInput = ({
  className,
  type = 'text',
  mask,
  alwaysShowMask,
  inputRef,
  ...props
}) => {
  const InputComponent = useCallback(inputProps => mask ? /*#__PURE__*/React.createElement(InputMask, _extends({}, inputProps, {
    inputRef: el => {
      if (typeof inputRef === 'function') {
        inputRef(el);
      } else if (typeof inputRef === 'object' && inputRef !== null) {
        inputRef.current = el;
      }
    },
    mask: mask,
    alwaysShowMask: alwaysShowMask
  })) : /*#__PURE__*/React.createElement("input", _extends({}, inputProps, {
    ref: inputRef
  })), [mask, alwaysShowMask, inputRef]);
  return InputComponent({
    className: classnames(styles['input'], className),
    type,
    ...props
  });
};

export default BareInput;