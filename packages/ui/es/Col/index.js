function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import classNames from 'classnames';

require("./Col.module.build.css");

var styles = {
  "col": "ui_3gzlY",
  "span-0": "ui_rET6v",
  "offset-0": "ui_Dq8BB",
  "span-1": "ui_2252h",
  "offset-1": "ui_2_FD-",
  "span-2": "ui_3jA4G",
  "offset-2": "ui_1nGkZ",
  "span-3": "ui_3RiYA",
  "offset-3": "ui_1_hyN",
  "span-4": "ui_3tv-z",
  "offset-4": "ui_3PtYu",
  "span-5": "ui_2Us9s",
  "offset-5": "ui_38s0T",
  "span-6": "ui_2Eemg",
  "offset-6": "ui_3vbL7",
  "span-7": "ui_348Jq",
  "offset-7": "ui_2zwqo",
  "span-8": "ui_3MPp4",
  "offset-8": "ui_3RBgk",
  "span-9": "ui_1RwfJ",
  "offset-9": "ui_3SCOm",
  "span-10": "ui_15gAr",
  "offset-10": "ui_1qIFA",
  "span-11": "ui_U508S",
  "offset-11": "ui_xOoNV",
  "span-12": "ui_3Hy_D",
  "offset-12": "ui_3-EzH"
};
const Col = /*#__PURE__*/forwardRef(({
  span,
  offset,
  className,
  ...props
}, ref) => {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames(styles['col'], span && styles[`span-${span}`], offset && styles[`offset-${offset}`], className),
    ref: ref
  }, props));
});
export default Col;