"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
const Col = /*#__PURE__*/(0, _react.forwardRef)(function Col({
  children,
  className,
  span,
  offset,
  ...props
}, ref) {
  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, styles['col'], span && styles[`col_span-${span}`], offset && styles[`col_offset-${offset}`])
  }), children);
});
var _default = Col;
exports.default = _default;