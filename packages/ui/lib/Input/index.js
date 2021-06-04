"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactInputMask = _interopRequireDefault(require("react-input-mask"));

var _classnames = _interopRequireDefault(require("classnames"));

var _useFloatLabel = _interopRequireDefault(require("./hooks/useFloatLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = {
  "form-control": "form-control-2sjws",
  "input": "input-2tqZz",
  "input-withFloatLabel": "input-withFloatLabel-2b6k5",
  "block": "block-1NYbn",
  "floatLabel": "floatLabel-txFNZ",
  "floatLabel-floated": "floatLabel-floated-3XKfR"
};
const Input = /*#__PURE__*/(0, _react.forwardRef)(({
  className,
  placeholder,
  withFloatLabel,
  block = true,
  value,
  mask,
  onFocus,
  onBlur,
  ...props
}, ref) => {
  const [isFloated, focusProps] = (0, _useFloatLabel.default)(Boolean(value), {
    onFocus,
    onBlur
  });
  const InputComponent = (0, _react.useCallback)(inputProps => {
    return mask ? /*#__PURE__*/_react.default.createElement(_reactInputMask.default, _extends({}, inputProps, {
      inputRef: el => {
        if (typeof ref === 'function') {
          ref(el);
        } else if (typeof ref === 'object' && ref !== null) {
          ref.current = el;
        }
      },
      mask: mask
    })) : /*#__PURE__*/_react.default.createElement("input", _extends({}, inputProps, {
      ref: ref
    }));
  }, [mask, ref]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(styles['form-control'], className)
  }, withFloatLabel && /*#__PURE__*/_react.default.createElement("label", {
    className: (0, _classnames.default)(styles['floatLabel'], block && styles['block'], isFloated && styles['floatLabel-floated'])
  }, placeholder), InputComponent({
    value,
    placeholder: withFloatLabel ? '' : placeholder,
    className: (0, _classnames.default)(styles['input'], withFloatLabel && styles['input-withFloatLabel']),
    ...focusProps,
    ...props
  }));
});
var _default = Input;
exports.default = _default;