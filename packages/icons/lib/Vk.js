"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const VkIcon = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  return /*#__PURE__*/_react.default.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 18 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    ref: ref
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.69293 1.19293C0.5 2.38586 0.5 4.30585 0.5 8.14583V8.85417C0.5 12.6941 0.5 14.6142 1.69293 15.8071C2.88586 17 4.80585 17 8.64583 17H9.35417C13.1941 17 15.1142 17 16.3071 15.8071C17.5 14.6142 17.5 12.6941 17.5 8.85417V8.14583C17.5 4.30585 17.5 2.38586 16.3071 1.19293C15.1142 0 13.1941 0 9.35417 0H8.64583C4.80585 0 2.88586 0 1.69293 1.19293ZM3.8648 5.3125H5.10467C5.42154 5.3125 5.54076 5.45116 5.65958 5.79441C6.26598 7.56043 7.28843 9.10382 7.70875 9.10382C7.86636 9.10382 7.93868 9.03125 7.93868 8.63104V6.8056C7.91021 6.28599 7.72865 6.06128 7.59417 5.89484C7.51112 5.79205 7.44603 5.71149 7.44603 5.59743C7.44603 5.45877 7.56454 5.3125 7.76152 5.3125H9.7099C9.97266 5.3125 10.0641 5.45296 10.0641 5.76817V8.22393C10.0641 8.48654 10.1782 8.57848 10.257 8.57848C10.4147 8.57848 10.546 8.48654 10.835 8.19765C11.7282 7.19957 12.3587 5.66305 12.3587 5.66305C12.4375 5.47924 12.5829 5.3125 12.8981 5.3125H14.138C14.513 5.3125 14.5918 5.50549 14.513 5.76817C14.3553 6.49042 12.8447 8.6179 12.8447 8.6179C12.7134 8.82799 12.6609 8.93307 12.8447 9.16945C12.9095 9.2601 13.0477 9.39542 13.2058 9.55026C13.3684 9.70949 13.552 9.88936 13.6986 10.0625C14.2312 10.6615 14.6325 11.1668 14.7443 11.5151C14.8465 11.8646 14.6694 12.0417 14.3151 12.0417H13.0753C12.7432 12.0417 12.576 11.8557 12.2146 11.4538C12.0615 11.2835 11.8734 11.0744 11.6231 10.8241C10.8875 10.115 10.5723 10.0231 10.3884 10.0231C10.1388 10.0231 10.0642 10.0938 10.0642 10.4479V11.5596C10.0642 11.8646 9.96667 12.0417 9.17854 12.0417C7.86497 12.0417 6.42146 11.2444 5.39689 9.77355C3.86004 7.61982 3.4397 5.9914 3.4397 5.66305C3.4397 5.47924 3.51055 5.3125 3.8648 5.3125Z",
    fill: "currentColor"
  }));
});
VkIcon.displayName = 'VkIcon';
var _default = VkIcon;
exports.default = _default;