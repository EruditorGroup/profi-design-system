function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
const SuccessIcon = /*#__PURE__*/forwardRef(({
  width = '14',
  height = '14',
  color,
  ...props
}, ref) => {
  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14 14",
    style: {
      color
    },
    ref: ref,
    width: width,
    height: height
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M13.9651 4.83824C13.739 4.17941 12.5549 3.98382 12.135 3.43824C11.7152 2.88235 11.8767 1.73971 11.3061 1.33824C10.7356 0.936765 9.65912 1.44118 8.97017 1.23529C8.29198 1.01912 7.7322 0 7.00019 0C6.26818 0 5.7084 1.01912 5.04098 1.23529C4.35203 1.44118 3.27554 0.936765 2.69424 1.33824C2.1237 1.73971 2.28517 2.88235 1.86534 3.43824C1.45627 3.98382 0.261371 4.17941 0.0353084 4.83824C-0.179989 5.47647 0.659672 6.3 0.659672 7C0.659672 7.7 -0.179989 8.52353 0.0353084 9.16177C0.261371 9.82059 1.44551 10.0162 1.86534 10.5618C2.28517 11.1176 2.1237 12.2603 2.69424 12.6618C3.26477 13.0632 4.34126 12.5588 5.03022 12.7647C5.7084 12.9809 6.26818 14 7.00019 14C7.7322 14 8.29198 12.9809 8.9594 12.775C9.64835 12.5588 10.7248 13.0632 11.2954 12.6721C11.8767 12.2706 11.7044 11.1279 12.1243 10.5721C12.5441 10.0265 13.7282 9.83088 13.9543 9.17206C14.1696 8.53382 13.3299 7.71029 13.3299 7.01029C13.3299 6.31029 14.1804 5.47647 13.9651 4.83824ZM10.7141 5.84706L5.9237 10.4279L3.2863 7.90588C2.98489 7.61765 2.98489 7.16471 3.2863 6.87647C3.58772 6.58824 4.06138 6.58824 4.36279 6.87647L5.9237 8.36912L9.63759 4.81765C9.939 4.52941 10.4127 4.52941 10.7141 4.81765C11.0155 5.10588 11.0155 5.55882 10.7141 5.84706Z",
    fill: "currentColor"
  }));
});
SuccessIcon.displayName = 'SuccessIcon';
export default SuccessIcon;