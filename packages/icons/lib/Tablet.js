function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
const TabletIcon = /*#__PURE__*/forwardRef(({
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
    d: "M6.5 5A1.5 1.5 0 005 6.5v8A1.5 1.5 0 006.5 16h8a1.5 1.5 0 001.5-1.5v-8A1.5 1.5 0 0014.5 5H14v2H7V5h-.5z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 5.5A1.5 1.5 0 019.5 4h2A1.5 1.5 0 0113 5.5V6H8v-.5z",
    fill: "currentColor"
  }));
});
TabletIcon.displayName = 'TabletIcon';
export default TabletIcon;