function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import cx from 'classnames';

require("./Col.module.build.css");

var styles = {
  "col": "col-1liXe",
  "col_span-1": "col_span-1-2RA0g",
  "col_offset-1": "col_offset-1-39-xl",
  "col_span-2": "col_span-2-uG-cG",
  "col_offset-2": "col_offset-2-1UAXC",
  "col_span-3": "col_span-3-3FJ0s",
  "col_offset-3": "col_offset-3-mwOq9",
  "col_span-4": "col_span-4-2wcOv",
  "col_offset-4": "col_offset-4-2uxGb",
  "col_span-5": "col_span-5-1Ybke",
  "col_offset-5": "col_offset-5-2KfqY",
  "col_span-6": "col_span-6-2SJG6",
  "col_offset-6": "col_offset-6-h4DID",
  "col_span-7": "col_span-7-1BKvT",
  "col_offset-7": "col_offset-7-1kKLf",
  "col_span-8": "col_span-8-2BO_3",
  "col_offset-8": "col_offset-8-Acmna",
  "col_span-9": "col_span-9-3mEDq",
  "col_offset-9": "col_offset-9-pDNAq",
  "col_span-10": "col_span-10-3P_kt",
  "col_offset-10": "col_offset-10-2T2BY",
  "col_span-11": "col_span-11-1ake-",
  "col_offset-11": "col_offset-11-3uycp",
  "col_span-12": "col_span-12-31jh7",
  "col_offset-12": "col_offset-12-hR7B_"
};
const Col = /*#__PURE__*/forwardRef(function Col({
  children,
  className,
  span,
  offset,
  ...props
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    ref: ref,
    className: cx(className, styles['col'], span && styles[`col_span-${span}`], offset && styles[`col_offset-${offset}`])
  }), children);
});
export default Col;