function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useCallback, useContext, forwardRef } from 'react';
import { DropdownContext } from '../..';
const DropdownItem = /*#__PURE__*/forwardRef(({
  className,
  as: Component = 'div',
  closable,
  onClick: onClickOrigin,
  ...props
}, ref) => {
  const context = useContext(DropdownContext);
  const onClickHandler = useCallback(e => {
    if (onClickOrigin) onClickOrigin(e);
    if (closable) context === null || context === void 0 ? void 0 : context.setOpened(!context.isOpened);
  }, [context, closable, onClickOrigin]);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: ref,
    className: className,
    onClick: onClickHandler
  }, props));
});
export default DropdownItem;