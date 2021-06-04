"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = {
  "notification": "notification-10_7J",
  "notification_disabled": "notification_disabled-3HFa7"
};

const Notification = ({
  className,
  disabled,
  children,
  ...htmlProps
}) => /*#__PURE__*/_react.default.createElement("div", _extends({
  className: (0, _classnames.default)(styles['notification'], disabled && styles['notification_disabled'], className)
}, htmlProps), children);

var _default = Notification;
exports.default = _default;