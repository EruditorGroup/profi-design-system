"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const CameraIcon = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
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
    d: "M7.51038 1.54549C6.97995 1.54549 6.47124 1.7562 6.09616 2.13127L4.36384 3.8636H2.5C1.39543 3.8636 0.5 4.75903 0.5 5.8636V13.4545C0.5 14.5591 1.39543 15.4545 2.5 15.4545H15.5C16.6046 15.4545 17.5 14.5591 17.5 13.4545V5.8636C17.5 4.75903 16.6046 3.8636 15.5 3.8636H13.6364L11.9041 2.13127C11.529 1.7562 11.0203 1.54549 10.4899 1.54549H7.51038ZM9 13.6991C11.2312 13.6991 13.04 11.8903 13.04 9.65906C13.04 7.42783 11.2312 5.61906 9 5.61906C6.76877 5.61906 4.96 7.42783 4.96 9.65906C4.96 11.8903 6.76877 13.6991 9 13.6991ZM9 12.4991C10.5685 12.4991 11.84 11.2275 11.84 9.65906C11.84 8.09057 10.5685 6.81906 9 6.81906C7.43151 6.81906 6.16 8.09057 6.16 9.65906C6.16 11.2275 7.43151 12.4991 9 12.4991ZM2.81814 6.95471C3.2449 6.95471 3.59086 6.60875 3.59086 6.18198C3.59086 5.75522 3.2449 5.40926 2.81814 5.40926C2.39137 5.40926 2.04541 5.75522 2.04541 6.18198C2.04541 6.60875 2.39137 6.95471 2.81814 6.95471Z",
    fill: "currentColor"
  }));
});
CameraIcon.displayName = 'CameraIcon';
var _default = CameraIcon;
exports.default = _default;