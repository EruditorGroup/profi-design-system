function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useCallback, useContext, forwardRef } from 'react';
import classNames from 'classnames';
import { DropdownContext } from '../..';

require("./DropdownToggler.module.build.css");

var styles = {
  "toggler": "toggler-2yWhm"
};
const DropdownToggler = /*#__PURE__*/forwardRef(({
  className,
  as: Component = 'div',
  ...props
}, ref) => {
  const context = useContext(DropdownContext); // Proxy handler for trigger context state

  const onClickHandler = useCallback(() => {
    if ((context === null || context === void 0 ? void 0 : context.trigger) === 'click') {
      context === null || context === void 0 ? void 0 : context.setOpened(!context.isOpened);
    }
  }, [context]);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: ref,
    onClick: onClickHandler,
    className: classNames(styles['toggler'], className)
  }, props));
});
export default DropdownToggler;