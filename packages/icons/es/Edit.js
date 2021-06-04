function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
const EditIcon = /*#__PURE__*/forwardRef((props, ref) => {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.351 3.60255C14.683 3.27064 14.683 2.73245 14.3511 2.40047C14.0192 2.06848 13.481 2.06842 13.149 2.40032L14.351 3.60255ZM8.60097 9.35114L14.351 3.60255L13.149 2.40032L7.39903 8.14892L8.60097 9.35114Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 9.87503L6.875 8.75003L6.5 10.25L8 9.87503Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3H5.5C3.84315 3 2.5 4.34315 2.5 6V11.25C2.5 12.9069 3.84315 14.25 5.5 14.25H10.75C12.4069 14.25 13.75 12.9069 13.75 11.25V8.25003",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }));
});
EditIcon.displayName = 'EditIcon';
export default EditIcon;