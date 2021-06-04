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
const Col = /*#__PURE__*/(0, _react.forwardRef)(({
  span,
  offset,
  className,
  ...props
}, ref) => {
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _classnames.default)(styles['col'], span && styles[`span-${span}`], offset && styles[`offset-${offset}`], className),
    ref: ref
  }, props));
});
var _default = Col;
exports.default = _default;