"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SelectedValueContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SelectOption = _interopRequireDefault(require("./components/SelectOption"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = {
  "root": "root-113jn",
  "block": "block-2srpd",
  "select": "select-mK-ji",
  "select-withFloatLabel": "select-withFloatLabel-3tZQ_",
  "open-icon": "open-icon-3JxVn",
  "option-placeholder": "option-placeholder-wB_Rz",
  "placeholder": "placeholder-1w8qJ",
  "placeholder-floated": "placeholder-floated-H_MlW"
};
const SelectedValueContext = /*#__PURE__*/(0, _react.createContext)(null);
exports.SelectedValueContext = SelectedValueContext;
const Select = /*#__PURE__*/(0, _react.forwardRef)(({
  selected,
  withFloatLabel,
  block,
  className,
  placeholder,
  children,
  ...props
}, ref) => {
  return /*#__PURE__*/_react.default.createElement(SelectedValueContext.Provider, {
    value: selected
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(styles['root'], block && styles['block'], className)
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: "11",
    height: "6",
    viewBox: "0 0 11 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: styles['open-icon']
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M5.5 6C5.5 6 2 4 0 0H11C9 4.00001 5.5 6 5.5 6Z",
    fill: "#34363B"
  })), withFloatLabel && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(styles['placeholder'], selected && styles['placeholder-floated'])
  }, placeholder), /*#__PURE__*/_react.default.createElement("select", _extends({
    className: (0, _classnames.default)(block && styles['block'], withFloatLabel && styles['select-withFloatLabel'], styles['select']),
    ref: ref
  }, props), placeholder && /*#__PURE__*/_react.default.createElement("option", {
    disabled: true,
    selected: true,
    className: styles['option-placeholder']
  }, !withFloatLabel && placeholder), children)));
});
Select.displayName = 'Select';
Select.Option = _SelectOption.default;
var _default = Select;
exports.default = _default;