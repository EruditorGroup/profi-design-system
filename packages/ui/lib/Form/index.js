"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "wrapControlWithRef", {
  enumerable: true,
  get: function () {
    return _wrapControlWithRef.default;
  }
});
Object.defineProperty(exports, "FormControl", {
  enumerable: true,
  get: function () {
    return _FormControl.default;
  }
});
exports.Textarea = exports.InputUnit = exports.Input = void 0;

var _react = require("react");

var _wrapControlWithRef = _interopRequireDefault(require("./wrapControlWithRef"));

var _BareInput = _interopRequireDefault(require("./BareInput"));

var _BareTextarea = _interopRequireDefault(require("./BareTextarea"));

var _BareInputUnit = _interopRequireDefault(require("./BareInputUnit"));

var _FormControl = _interopRequireDefault(require("./FormControl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Input = /*#__PURE__*/(0, _react.forwardRef)((0, _wrapControlWithRef.default)(_BareInput.default));
exports.Input = Input;
const InputUnit = /*#__PURE__*/(0, _react.forwardRef)((0, _wrapControlWithRef.default)(_BareInputUnit.default));
exports.InputUnit = InputUnit;
const Textarea = /*#__PURE__*/(0, _react.forwardRef)((0, _wrapControlWithRef.default)(_BareTextarea.default));
exports.Textarea = Textarea;