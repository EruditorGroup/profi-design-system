function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useCallback, useMemo, useRef } from 'react';
import { useFloatLabel } from '@eruditorgroup/profi-toolkit';
import FormControl from './FormControl';
const GLOBAL_ID_PREFIX = 'profi-ui-';
let globalIdCount = 0;

const controlFactory = Component => (props, ref) => {
  const {
    withFloatLabel,
    size = 'l',
    block = true,
    invalid,
    disabled,
    style,
    leading,
    trailing,
    id,
    className,
    placeholder,
    value,
    defaultValue,
    onFocus,
    onBlur,
    ...restInputProps
  } = props;
  const inputId = useMemo(() => id || `${GLOBAL_ID_PREFIX}${globalIdCount++}`, [id]);
  const [isFloated, focusHandlers] = useFloatLabel(Boolean(value || defaultValue), {
    onFocus,
    onBlur
  });
  const internalRef = useRef(null);
  const inputRef = useMemo(() => ref || internalRef, [ref]);
  const onWrapperClick = useCallback(() => {
    if (typeof inputRef === 'object' && inputRef !== null) {
      var _inputRef$current;

      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
    }
  }, [inputRef]);
  const wrapperProps = {
    className,
    label: withFloatLabel ? placeholder : undefined,
    withFloatLabel,
    isLabelFloated: isFloated,
    size: size,
    block,
    invalid,
    disabled,
    style,
    leading,
    trailing
  };
  const inputProps = {
    id: inputId,
    value,
    defaultValue,
    disabled,
    placeholder: withFloatLabel ? '' : placeholder,
    ...focusHandlers,
    ...restInputProps
  };
  return /*#__PURE__*/React.createElement(FormControl, _extends({
    labelFor: inputId,
    onClick: onWrapperClick
  }, wrapperProps), /*#__PURE__*/React.createElement(Component, _extends({}, inputProps, {
    inputRef: inputRef
  })));
};

export default controlFactory;