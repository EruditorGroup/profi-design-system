"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactTextareaAutosize = _interopRequireDefault(require("react-textarea-autosize"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = {
  "textarea": "textarea-4CxXL"
};
const DEFAULT_TEXTAREA_ROWS = 3;

const BareTextarea = ({
  className,
  rows,
  minRows,
  maxRows,
  inputRef,
  ...props
}) => {
  if (rows !== undefined) {
    minRows = rows;
    maxRows = rows;
  } else if (minRows === undefined && maxRows === undefined) {
    minRows = DEFAULT_TEXTAREA_ROWS;
    maxRows = DEFAULT_TEXTAREA_ROWS;
  }

  return /*#__PURE__*/_react.default.createElement(_reactTextareaAutosize.default, _extends({}, props, {
    minRows: minRows,
    maxRows: maxRows,
    className: (0, _classnames.default)(styles['textarea'], className),
    ref: el => {
      if (typeof inputRef === 'function') {
        inputRef(el);
      } else if (typeof inputRef === 'object' && inputRef !== null) {
        inputRef.current = el;
      }
    }
  }));
};

var _default = BareTextarea;
exports.default = _default;