function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
const RepeatIcon = /*#__PURE__*/forwardRef((props, ref) => {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 4.125H8C5.23858 4.125 3 6.36358 3 9.125V9.125C3 11.8864 5.23858 14.125 8 14.125V14.125C10.7614 14.125 13 11.8864 13 9.125V9.125M13 4.125L11 1.875M13 4.125L11 5.875",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
});
RepeatIcon.displayName = 'RepeatIcon';
export default RepeatIcon;