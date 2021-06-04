"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = {
  "spinner": "spinner-FTm7B",
  "spin": "spin-1Gr5i",
  "inner": "inner-fKh5y",
  "showed": "showed-33tG1",
  "withRightPadding": "withRightPadding-2TjSY",
  "withLeftPadding": "withLeftPadding-18MWx"
};
var common = {
  "color-brand": "color-brand-h5Cyd",
  "color-primary": "color-primary-A7lMg",
  "color-secondary": "color-secondary-2cS18",
  "color-light": "color-light-2laSu",
  "color-danger": "color-danger-12hTX",
  "color-success": "color-success-2wEne",
  "color-warning": "color-warning-Hpz_8",
  "size-xs": "size-xs-3yjq_",
  "size-s": "size-s-3zQju",
  "size-m": "size-m-2guU_",
  "size-l": "size-l-2R6Zj",
  "size-xl": "size-xl-3UmLL",
  "size-xxl": "size-xxl-2nH5c",
  "size-huge": "size-huge-1MGuM"
};
const Spinner = /*#__PURE__*/(0, _react.forwardRef)(({
  withLeftPadding,
  withRightPadding,
  speed,
  color,
  delay,
  size,
  className,
  ...props
}, ref) => {
  const [showed, setShowed] = (0, _react.useState)(!delay);
  (0, _react.useEffect)(() => {
    if (delay) {
      const timeout = setTimeout(() => setShowed(true), delay);
      return () => clearTimeout(timeout);
    }
  }, [delay, setShowed]);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _classnames.default)(styles['inner'], showed && className, {
      [styles['showed']]: showed,
      [styles['withRightPadding']]: withRightPadding,
      [styles['withLeftPadding']]: withLeftPadding,
      [common[`size-${size}`]]: size,
      [common[`color-${color}`]]: color
    })
  }, props), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      transitionDuration: speed ? `${speed}ms` : undefined
    },
    className: (0, _classnames.default)(styles['spinner']),
    ref: ref
  }));
});
var _default = Spinner;
exports.default = _default;