import React, { useContext } from 'react';
import { DropdownContext } from "@profiru/ui/components/Dropdown";
import BodyPortal from "@profiru/ui/components/BodyPortal";
import classNames from 'classnames';
var styles = {
  "portal": "ui_5I8af",
  "animated": "ui_1bEH3",
  "opened": "ui_2L9Id",
  "horizontal-left": "ui_3Sh7S",
  "horizontal-right": "ui_3WgS-"
};
import useRelativePosition from "@profiru/ui/hooks/useRelativePosition";
export default function DropdownPortal({
  children,
  animated = true,
  className
}) {
  var _context$togglerRef;

  const context = useContext(DropdownContext);
  const relativePosition = useRelativePosition(context === null || context === void 0 ? void 0 : (_context$togglerRef = context.togglerRef) === null || _context$togglerRef === void 0 ? void 0 : _context$togglerRef.current, (context === null || context === void 0 ? void 0 : context.horizontalPosition) || 'left');
  return /*#__PURE__*/React.createElement(BodyPortal, {
    style: relativePosition,
    ref: el => {
      if (context) context.contentRef.current = el;
    },
    className: classNames(styles['portal'], styles[`horizontal-${context === null || context === void 0 ? void 0 : context.horizontalPosition}`], animated && styles['animated'], (context === null || context === void 0 ? void 0 : context.isOpened) && styles['opened'], className)
  }, children);
}