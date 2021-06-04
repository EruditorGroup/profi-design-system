function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext, forwardRef, useRef } from 'react';
import classNames from 'classnames';
import { DropdownContext } from '../../';

require("./DropdownPortal.module.build.css");

var styles = {
  "dropdown-portal": "dropdown-portal-1Vx4e",
  "position-bottom-right": "position-bottom-right-2E6--",
  "position-bottom-left": "position-bottom-left-1pSl3",
  "position-top-left": "position-top-left-3OqQA",
  "position-top-right": "position-top-right-1QRZi",
  "opened": "opened-1HH81",
  "animated": "animated-1ZTCd",
  "dropdown-area": "dropdown-area-2gTjQ",
  "horizontal-left": "horizontal-left-tQIV6",
  "horizontal-right": "horizontal-right-2O20K"
};
import { useClickOutside } from '@eruditorgroup/profi-toolkit';
const DropdownPortal = /*#__PURE__*/forwardRef(({
  animated = true,
  style,
  position = 'bottom-left',
  className,
  ...props
}, ref) => {
  const _ref = useRef();

  const context = useContext(DropdownContext);
  useClickOutside(_ref, () => {
    if (!context) return;
    const {
      trigger,
      isOpened,
      setOpened
    } = context;

    if (trigger === 'click') {
      isOpened && setOpened(false);
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(styles['dropdown-portal'], animated && styles['animated'], styles[`position-${position}`], (context === null || context === void 0 ? void 0 : context.isOpened) && styles['opened'])
  }, /*#__PURE__*/React.createElement("div", _extends({
    ref: el => {
      _ref.current = el;
      if (typeof ref === 'function') ref(el);else if (ref) ref.current = el;
    },
    className: classNames(styles['dropdown-area'], className)
  }, props, {
    style: { ...style
    }
  })));
});
export default DropdownPortal;