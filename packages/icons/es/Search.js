function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
const SearchIcon = /*#__PURE__*/forwardRef((props, ref) => {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 18 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "7.5",
    r: "6",
    stroke: "currentColor",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 12.5L15.5 15.5",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
});
SearchIcon.displayName = 'SearchIcon';
export default SearchIcon;