"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _bodyScrollLock = require("body-scroll-lock");

var _reactTransitionGroup = require("react-transition-group");

var _profiIcons = require("@eruditorgroup/profi-icons");

var _BodyPortal = _interopRequireDefault(require("../BodyPortal"));

var _Button = _interopRequireDefault(require("../Button"));

var _Text = _interopRequireDefault(require("../Typography/Text"));

var _profiToolkit = require("@eruditorgroup/profi-toolkit");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = {
  "root": "root-3qHw0",
  "overlay": "overlay-1o53T",
  "modal": "modal-2h_Gm",
  "head": "head-1quAo",
  "button-icon": "button-icon-1ta2j",
  "right": "right-2qpKZ",
  "left": "left-1sRS1",
  "icon": "icon-1YUtM",
  "body": "body-2w9Kj",
  "body-withPadding": "body-withPadding-2HCxw",
  "autoSize": "autoSize-2EOcm"
};
var slideUpTransition = {};
var fadeInTransition = {};
const DEFAULT_ANIMATION_DURATION = 300;
const Modal = /*#__PURE__*/(0, _react.forwardRef)(({
  width,
  height,
  autoSize,
  visible,
  title,
  children,
  className,
  withPadding = true,
  withCloseButton = true,
  onClose,
  onClickBack,
  ...props
}, ref) => {
  const bodyEl = (0, _react.useRef)(null); // Отключаем промотку body

  (0, _react.useEffect)(() => {
    visible ? (0, _bodyScrollLock.disableBodyScroll)(bodyEl.current) : (0, _bodyScrollLock.enableBodyScroll)(bodyEl.current);
  }, [visible]);
  if (!(0, _profiToolkit.canUseDom)()) return null;

  const handleCloseClick = event => {
    if (!event) return;
    event.stopPropagation();
    onClose(event);
  };

  const rootStyles = {
    width,
    height
  };
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    ref: ref
  }, props), /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
    unmountOnExit: true,
    mountOnEnter: true,
    in: visible,
    timeout: DEFAULT_ANIMATION_DURATION,
    classNames: fadeInTransition
  }, /*#__PURE__*/_react.default.createElement(_BodyPortal.default, null, /*#__PURE__*/_react.default.createElement("div", {
    className: styles['overlay'],
    onClick: handleCloseClick
  }))), /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
    unmountOnExit: true,
    mountOnEnter: true,
    in: visible,
    timeout: DEFAULT_ANIMATION_DURATION,
    classNames: slideUpTransition
  }, /*#__PURE__*/_react.default.createElement(_BodyPortal.default, {
    className: styles['root']
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(styles['modal'], className, autoSize && styles['autoSize']),
    style: rootStyles
  }, onClickBack && /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: onClickBack,
    className: (0, _classnames.default)(styles['button-icon'], styles['left'])
  }, /*#__PURE__*/_react.default.createElement(_profiIcons.ArrowLeftIcon, null)), withCloseButton && /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: handleCloseClick,
    className: (0, _classnames.default)(styles['button-icon'], styles['right'])
  }, /*#__PURE__*/_react.default.createElement(_profiIcons.CloseIcon, null)), title && /*#__PURE__*/_react.default.createElement("div", {
    className: styles['head']
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    bold: true
  }, title)), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(styles['body'], withPadding && styles['body-withPadding']),
    ref: bodyEl
  }, children)))));
});
var _default = Modal;
exports.default = _default;