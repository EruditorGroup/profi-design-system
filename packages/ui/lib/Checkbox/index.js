"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getTextSize = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _profiIcons = require("@eruditorgroup/profi-icons");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = {
  "label": "label-2tyyJ",
  "checkbox": "checkbox-E1Wpv",
  "checkbox_size-m": "checkbox_size-m-O2h7l",
  "checkbox_size-l": "checkbox_size-l-3PRpv",
  "checkbox_size-xl": "checkbox_size-xl-ZREY3",
  "checkbox_size-xxl": "checkbox_size-xxl-1HCes",
  "checkbox_type-radio": "checkbox_type-radio-2gNH8",
  "input": "input-AArKW",
  "content_size-m": "content_size-m-3QXVW",
  "content_size-l": "content_size-l-Qnug0",
  "content_size-xl": "content_size-xl-3teUt",
  "content_size-xxl": "content_size-xxl-3Ursa",
  "content": "content-3c0Cu"
};

const getTextSize = size => ['xxl', 'xl', 'l'].includes(size) ? 'l' : 'm';

exports.getTextSize = getTextSize;
const Checkbox = /*#__PURE__*/(0, _react.forwardRef)(function Checkbox({
  label,
  type = 'checkbox',
  size = 'm',
  children,
  className,
  style,
  ...props
}, ref) {
  const isRadio = type === 'radio';
  const Icon = isRadio ? _profiIcons.DotIcon : _profiIcons.CheckIcon;
  const labelText = children !== null && children !== void 0 ? children : label;
  return /*#__PURE__*/_react.default.createElement("label", {
    style: style,
    className: (0, _classnames.default)(className, styles['label'])
  }, /*#__PURE__*/_react.default.createElement("input", _extends({
    ref: ref,
    className: styles['input'],
    type: type
  }, props)), /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)(styles['checkbox'], styles[`checkbox_size-${size}`], isRadio && styles['checkbox_type-radio'])
  }, /*#__PURE__*/_react.default.createElement(Icon, null)), labelText && /*#__PURE__*/_react.default.createElement(_.Text, {
    as: "span",
    size: getTextSize(size),
    className: (0, _classnames.default)(styles['content'], styles[`content_size-${size}`])
  }, labelText));
});
var _default = Checkbox;
exports.default = _default;