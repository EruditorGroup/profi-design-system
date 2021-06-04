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
  "avatar": "avatar-1iXtc",
  "design-circle": "design-circle-4LhNz",
  "onlineDot": "onlineDot-LqpiJ",
  "design-rect": "design-rect-j6qVY"
};
var common = {
  "color-brand": "color-brand-h5Cyd",
  "color-primary": "color-primary-A7lMg",
  "color-secondary": "color-secondary-2cS18",
  "color-light": "color-light-2laSu",
  "color-danger": "color-danger-12hTX",
  "color-success": "color-success-2wEne",
  "color-warning": "color-warning-Hpz_8",
  "size-xs": "size-xs-3yjq_",
  "size-s": "size-s-3zQju",
  "size-m": "size-m-2guU_",
  "size-l": "size-l-2R6Zj",
  "size-xl": "size-xl-3UmLL",
  "size-xxl": "size-xxl-2nH5c",
  "size-huge": "size-huge-1MGuM"
};
const Avatar = /*#__PURE__*/(0, _react.forwardRef)(({
  size,
  style,
  isOnline,
  design = 'circle',
  src,
  username,
  className,
  ...props
}, ref) => {
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    ref: ref,
    style: src ? {
      backgroundImage: `url(${src})`,
      ...style
    } : style,
    className: (0, _classnames.default)(styles['avatar'], size && common[`size-${size}`], styles[`design-${design}`], className)
  }, props), !src && (username === null || username === void 0 ? void 0 : username.slice(0, 1)), isOnline && /*#__PURE__*/_react.default.createElement("i", {
    className: styles['onlineDot']
  }));
});
var _default = Avatar;
exports.default = _default;