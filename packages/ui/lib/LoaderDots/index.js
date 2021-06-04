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
  "loader": "loader-1On0C",
  "size-extraSmall": "size-extraSmall-29CXI",
  "size-large": "size-large-1HoWM",
  "dot": "dot-jXZDZ",
  "dotLoader": "dotLoader-3Bc3j",
  "dotDesign-circle": "dotDesign-circle-3H_aZ",
  "dotDesign-square": "dotDesign-square-3Hp1d",
  "dotSize-extra-large": "dotSize-extra-large-3rFXM",
  "dotSize-large": "dotSize-large-2gkD2",
  "dotSize-medium": "dotSize-medium-r86Im",
  "dotSize-small": "dotSize-small-2z0V7",
  "dotSize-extraSmall": "dotSize-extraSmall-1sRSH",
  "dotColor-white": "dotColor-white-1Nns-",
  "dotColor-gray": "dotColor-gray-2y8kj"
};
const LoaderDots = /*#__PURE__*/(0, _react.forwardRef)(({
  size = 'medium',
  design = 'square',
  animation = 'scale',
  color = 'white',
  ...props
}, ref) => /*#__PURE__*/_react.default.createElement("div", _extends({
  className: (0, _classnames.default)(styles['loader'], styles[`size-${size}`], styles[`design-${design}`]),
  ref: ref
}, props), Array.from({
  length: 3
}).map((_, i) => /*#__PURE__*/_react.default.createElement("div", {
  key: i,
  className: [styles['dot'], styles[`dotAnimation-${animation}`], styles[`dotDesign-${design}`], styles[`dotSize-${size}`], styles[`dotColor-${color}`]].join(' ')
}))));
var _default = LoaderDots;
exports.default = _default;