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
  "button": "button-2QW3c",
  "content": "content-3vUWP",
  "icon": "icon-3lsDn",
  "icon-withMargin": "icon-withMargin-C-Tod",
  "design-primary": "design-primary-2Abw3",
  "design-secondary": "design-secondary-2vz2O",
  "design-light": "design-light-2VriV",
  "design-transparent": "design-transparent-1MjKu",
  "design-fb": "design-fb-TnTwL",
  "design-ya": "design-ya-1YROP",
  "design-vk": "design-vk-1L6DH",
  "size-s": "size-s-3Yi-C",
  "rounded": "rounded-_sBR4",
  "size-m": "size-m-3aY4S",
  "size-l": "size-l-_HiyL",
  "block": "block-2QS_i",
  "leading": "leading-1HJJN",
  "trailing": "trailing-2-Fsq",
  "design-link": "design-link-2m_jv",
  "regular": "regular-3vOd5"
};
const Button = /*#__PURE__*/(0, _react.forwardRef)(({
  design = 'primary',
  size = 'm',
  type = 'button',
  rounded = false,
  block = false,
  as: Component = 'button',
  children,
  className,
  contentClassName,
  leading,
  trailing,
  regular,
  ...props
}, ref) => {
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: ref,
    type: type,
    className: (0, _classnames.default)(styles['button'], styles[`design-${design}`], styles[`size-${size}`], block && styles[`block`], rounded && styles[`rounded`], regular && styles[`regular`], className)
  }, props), leading && /*#__PURE__*/_react.default.createElement("span", {
    className: styles['leading']
  }, leading), /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)(styles['content'], contentClassName)
  }, children), trailing && /*#__PURE__*/_react.default.createElement("span", {
    className: styles['trailing']
  }, trailing));
});
var _default = Button;
exports.default = _default;