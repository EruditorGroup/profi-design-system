"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactInputMask = _interopRequireDefault(require("react-input-mask"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = {
  "input": "input-27dTD"
};

const BareInput = ({
  className,
  type = 'text',
  mask,
  alwaysShowMask,
  inputRef,
  ...props
}) => {
  const InputComponent = (0, _react.useCallback)(inputProps => mask ? /*#__PURE__*/_react.default.createElement(_reactInputMask.default, _extends({}, inputProps, {
    inputRef: el => {
      if (typeof inputRef === 'function') {
        inputRef(el);
      } else if (typeof inputRef === 'object' && inputRef !== null) {
        inputRef.current = el;
      }
    },
    mask: mask,
    alwaysShowMask: alwaysShowMask
  })) : /*#__PURE__*/_react.default.createElement("input", _extends({}, inputProps, {
    ref: inputRef
  })), [mask, alwaysShowMask, inputRef]);
  return InputComponent({
    className: (0, _classnames.default)(styles['input'], className),
    type,
    ...props
  });
};

var _default = BareInput;
exports.default = _default;