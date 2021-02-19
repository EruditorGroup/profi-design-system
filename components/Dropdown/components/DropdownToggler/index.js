import React, { useCallback, useContext } from 'react';
import { DropdownContext } from "@profiru/ui/components/Dropdown";
var styles = {
  "toggler": "ui_8YMmy"
};
export default function DropdownToggler({
  children
}) {
  const context = useContext(DropdownContext); // Proxy handler for trigger context state

  const onClickHandler = useCallback(() => {
    context === null || context === void 0 ? void 0 : context.setOpened(!context.isOpened);
  }, [context]);
  return (
    /*#__PURE__*/
    // Content should be positioned near the toggler ref
    React.createElement("div", {
      ref: el => {
        if (context) context.togglerRef.current = el;
      },
      onClick: onClickHandler,
      className: styles['toggler']
    }, children)
  );
}