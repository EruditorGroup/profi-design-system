"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _BareInput = _interopRequireDefault(require("../BareInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = {
  "input-unit": "input-unit-H3t8P",
  "input-unit__input": "input-unit__input-dPZf2",
  "input-unit__stretcher": "input-unit__stretcher-3_4Zb",
  "input-unit__value": "input-unit__value-vLaDY"
};

const BareInputUnit = ({
  unit,
  unitClassName,
  unitStyle,
  value,
  defaultValue,
  placeholder,
  className,
  onChange,
  inputRef,
  ...props
}) => {
  var _ref;

  const [inputValue, setInputValue] = (0, _react.useState)((_ref = value !== null && value !== void 0 ? value : defaultValue) !== null && _ref !== void 0 ? _ref : '');
  const unitRef = (0, _react.useRef)(null);

  const _onChange = evt => {
    const numericValue = evt.target.value.replace(/[^\d]/g, '');
    if (numericValue === inputValue) return;
    evt.target.value = numericValue;
    onChange && onChange(evt);
    setInputValue(numericValue);
  };

  const overflowUnitPadStyles = {
    paddingRight: unitRef.current ? `${unitRef.current.getBoundingClientRect().width + 4}px` : undefined
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(styles['input-unit']),
    style: overflowUnitPadStyles
  }, /*#__PURE__*/_react.default.createElement(_BareInput.default, _extends({
    inputRef: inputRef
  }, props, {
    value: inputValue,
    placeholder: placeholder,
    className: (0, _classnames.default)(styles['input-unit__input'], className),
    onChange: _onChange
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(styles['input-unit__stretcher'])
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: styles['input-unit__value']
  }, inputValue), /*#__PURE__*/_react.default.createElement("span", {
    ref: unitRef,
    className: (0, _classnames.default)(styles['input-unit__unit'], unitClassName),
    style: unitStyle
  }, !placeholder || inputValue ? unit : '')));
};

var _default = BareInputUnit;
exports.default = _default;