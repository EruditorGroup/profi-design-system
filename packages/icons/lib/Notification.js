function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
const NotificationIcon = /*#__PURE__*/forwardRef(({
  width = '20',
  height = '20',
  color,
  ...props
}, ref) => {
  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    style: {
      color
    },
    ref: ref,
    width: width,
    height: height
  }, props), /*#__PURE__*/React.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M9 4.5a1.5 1.5 0 113 0c0 .449.291.838.686 1.05a4.61 4.61 0 012.38 3.41l.34 2.386c.06.416.294.787.644 1.02l.388.26c.351.234.562.627.562 1.049 0 .18-.145.325-.325.325H4.325A.325.325 0 014 13.675c0-.422.21-.816.562-1.05l.388-.258c.35-.234.584-.605.643-1.021l.341-2.386a4.61 4.61 0 012.38-3.41C8.709 5.339 9 4.95 9 4.5zM10.5 17a2.5 2.5 0 01-2.45-2h4.9a2.5 2.5 0 01-2.45 2z",
    fill: "currentColor"
  }));
});
NotificationIcon.displayName = 'NotificationIcon';
export default NotificationIcon;