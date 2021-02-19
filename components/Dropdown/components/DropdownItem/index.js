function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef, useContext } from 'react';
import classnames from 'classnames';
var styles = {
  "item": "ui_3X4XG",
  "design-light": "ui_AXKil",
  "design-brand": "ui_29X3o",
  "disabled": "ui_37wKW",
  "divided": "ui_1xyhE"
};
import { DropdownContext } from "@profiru/ui/components/Dropdown";
const DropdownItem = /*#__PURE__*/forwardRef(({
  to,
  disabled = false,
  divided = false,
  className,
  ...props
}, ref) => {
  const context = useContext(DropdownContext);
  return /*#__PURE__*/React.createElement("a", _extends({
    className: classnames(styles['item'], divided && styles['divided'], disabled && styles['disabled'], styles[`design-${context === null || context === void 0 ? void 0 : context.design}`], className),
    href: to,
    ref: ref
  }, props));
});
export default DropdownItem;