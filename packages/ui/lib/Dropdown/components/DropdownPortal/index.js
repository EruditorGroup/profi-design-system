"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ = require("../../");

var _profiToolkit = require("@eruditorgroup/profi-toolkit");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = {
  "dropdown-portal": "dropdown-portal-1Vx4e",
  "position-bottom-right": "position-bottom-right-2E6--",
  "position-bottom-left": "position-bottom-left-1pSl3",
  "position-top-left": "position-top-left-3OqQA",
  "position-top-right": "position-top-right-1QRZi",
  "opened": "opened-1HH81",
  "animated": "animated-1ZTCd",
  "dropdown-area": "dropdown-area-2gTjQ",
  "horizontal-left": "horizontal-left-tQIV6",
  "horizontal-right": "horizontal-right-2O20K"
};
const DropdownPortal = /*#__PURE__*/(0, _react.forwardRef)(({
  animated = true,
  style,
  position = 'bottom-left',
  className,
  ...props
}, ref) => {
  const _ref = (0, _react.useRef)();

  const context = (0, _react.useContext)(_.DropdownContext);
  (0, _profiToolkit.useClickOutside)(_ref, () => {
    if (!context) return;
    const {
      trigger,
      isOpened,
      setOpened
    } = context;

    if (trigger === 'click') {
      isOpened && setOpened(false);
    }
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(styles['dropdown-portal'], animated && styles['animated'], styles[`position-${position}`], (context === null || context === void 0 ? void 0 : context.isOpened) && styles['opened'])
  }, /*#__PURE__*/_react.default.createElement("div", _extends({
    ref: el => {
      _ref.current = el;
      if (typeof ref === 'function') ref(el);else if (ref) ref.current = el;
    },
    className: (0, _classnames.default)(styles['dropdown-area'], className)
  }, props, {
    style: { ...style
    }
  })));
});
var _default = DropdownPortal;
exports.default = _default;