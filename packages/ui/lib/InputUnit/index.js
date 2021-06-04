"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Input = _interopRequireDefault(require("../Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = {
  "wrapper": "wrapper-1euO-",
  "input": "input-29WL8",
  "unit": "unit-2PB0f",
  "unit-withFloatLabel": "unit-withFloatLabel-3x3g3",
  "value": "value-fjLCw",
  "unitOffset": "unitOffset-2boyp"
};
const InputUnit = /*#__PURE__*/(0, _react.forwardRef)(({
  unit,
  placeholder,
  withFloatLabel,
  onKeyUp,
  ...props
}, ref) => {
  const [value, setValue] = (0, _react.useState)('');

  const _onChange = (0, _react.useCallback)(ev => {
    if (onKeyUp) onKeyUp(ev);
    setValue(ev.target.value.replace(/[^\d]/g, ''));
  }, [onKeyUp]);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(styles['wrapper'], styles)
  }, /*#__PURE__*/_react.default.createElement(_Input.default, _extends({
    onChange: _onChange,
    value: value,
    className: styles['input'],
    ref: ref,
    withFloatLabel: withFloatLabel,
    placeholder: placeholder
  }, props)), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(styles['unit'], {
      [styles['unit-withFloatLabel']]: placeholder && withFloatLabel
    })
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: styles['value']
  }, value), /*#__PURE__*/_react.default.createElement("span", {
    className: styles['unitOffset']
  }), !placeholder || value ? unit : ''));
});
var _default = InputUnit;
exports.default = _default;