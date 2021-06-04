function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
const CameraOutlineIcon = /*#__PURE__*/forwardRef(({
  width = '17',
  height = '17',
  color,
  ...props
}, ref) => {
  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 17 17",
    style: {
      color
    },
    ref: ref,
    width: width,
    height: height
  }, props), /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "16",
    height: "12",
    rx: "2.5",
    stroke: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "5.5",
    y: "3.5",
    width: "6",
    height: "6",
    rx: "3",
    stroke: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "3",
    height: "3",
    rx: "1.5",
    fill: "currentColor"
  }));
});
CameraOutlineIcon.displayName = 'CameraOutlineIcon';
export default CameraOutlineIcon;