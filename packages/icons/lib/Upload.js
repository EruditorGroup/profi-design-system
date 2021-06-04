function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
const UploadIcon = /*#__PURE__*/forwardRef(({
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
    d: "M10 17a7 7 0 100-14 7 7 0 000 14zm0-11l-4 4h2.5v3.5h3V10H14l-4-4z",
    fill: "currentColor"
  }));
});
UploadIcon.displayName = 'UploadIcon';
export default UploadIcon;