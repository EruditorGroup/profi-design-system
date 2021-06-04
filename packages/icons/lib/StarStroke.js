"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const StarStrokeIcon = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  return /*#__PURE__*/_react.default.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 11 11",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    ref: ref
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M1.13991 5.70439L1.43342 5.23903L1.13991 5.70439L2.93167 6.8345L2.14637 8.80195C1.72342 9.8616 2.99443 10.785 3.87151 10.0553L5.5 8.7005L7.12849 10.0553C8.00557 10.785 9.27658 9.86159 8.85363 8.80195L8.06833 6.8345L9.86009 5.70439C10.8251 5.09573 10.3396 3.60155 9.20115 3.67636L7.08731 3.81525L6.5662 1.76196C6.28553 0.656082 4.71447 0.656085 4.4338 1.76196L3.91269 3.81525L1.79885 3.67636C0.660376 3.60155 0.174892 5.09573 1.13991 5.70439ZM5.56396 8.64729C5.56389 8.64734 5.56383 8.6474 5.56377 8.64745L5.56396 8.64729ZM5.43623 8.64745C5.43617 8.6474 5.43611 8.64734 5.43604 8.64729L5.43623 8.64745ZM8.03749 6.75723C8.03751 6.75729 8.03753 6.75735 8.03756 6.75741L8.03749 6.75723Z",
    stroke: "currentColor",
    strokeWidth: "1.2"
  }));
});
StarStrokeIcon.displayName = 'StarStrokeIcon';
var _default = StarStrokeIcon;
exports.default = _default;