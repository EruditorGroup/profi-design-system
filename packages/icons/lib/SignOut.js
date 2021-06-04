function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
const SignOutIcon = /*#__PURE__*/forwardRef(({
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
    d: "M18 10l.707.707a1 1 0 000-1.414L18 10zm-1.793-3.207a1 1 0 10-1.414 1.414l1.414-1.414zm-1.414 5a1 1 0 001.414 1.414l-1.414-1.414zM12 11h6V9h-6v2zm6.707-1.707l-2.5-2.5-1.414 1.414 2.5 2.5 1.414-1.414zm-1.414 0l-2.5 2.5 1.414 1.414 2.5-2.5-1.414-1.414z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M6 4a2 2 0 00-2 2v8a2 2 0 002 2h4a2 2 0 002-2v-3H8a1 1 0 110-2h4V6a2 2 0 00-2-2H6z",
    fill: "currentColor"
  }));
});
SignOutIcon.displayName = 'SignOutIcon';
export default SignOutIcon;