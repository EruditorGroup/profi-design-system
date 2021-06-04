function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
const PersonIcon = /*#__PURE__*/forwardRef(({
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
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: "10.5",
    cy: "6.5",
    r: "2.5",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 13.86c0 2.13-2.686 2.64-6 2.64s-6-.51-6-2.64c0-2.132 2.686-3.86 6-3.86s6 1.728 6 3.86z",
    fill: "currentColor"
  }));
});
PersonIcon.displayName = 'PersonIcon';
export default PersonIcon;