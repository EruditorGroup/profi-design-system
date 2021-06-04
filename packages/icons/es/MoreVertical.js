function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
const MoreVerticalIcon = /*#__PURE__*/forwardRef((props, ref) => {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 18 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2.5",
    cy: "8.5",
    r: "2",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "8.5",
    r: "2",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15.5",
    cy: "8.5",
    r: "2",
    fill: "currentColor"
  }));
});
MoreVerticalIcon.displayName = 'MoreVerticalIcon';
export default MoreVerticalIcon;