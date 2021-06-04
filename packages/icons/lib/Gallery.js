"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const GalleryIcon = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  return /*#__PURE__*/_react.default.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 18 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    ref: ref
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.5 1C1.39543 1 0.5 1.89543 0.5 3V11C0.5 12.0371 1.28934 12.8898 2.3 12.9901V6C2.3 4.23269 3.73269 2.8 5.5 2.8H14.4901C14.3898 1.78934 13.5371 1 12.5 1H2.5ZM5.5 4C4.39543 4 3.5 4.89543 3.5 6V13V14C3.5 15.1046 4.39543 16 5.5 16H15.5C16.6046 16 17.5 15.1046 17.5 14V6C17.5 4.89543 16.6046 4 15.5 4H14.5H5.5ZM10.5 10.1249C11.5562 10.1249 12.4124 9.26863 12.4124 8.21243C12.4124 7.15623 11.5562 6.3 10.5 6.3C9.44375 6.3 8.58753 7.15623 8.58753 8.21243C8.58753 9.26863 9.44375 10.1249 10.5 10.1249ZM6.87517 12.8019C7.62252 11.7059 8.96638 10.9748 10.5 10.9748C12.0335 10.9748 13.3774 11.7059 14.1247 12.8019C14.7859 13.7715 13.7984 14.7997 12.6249 14.7997H8.37504C7.20148 14.7997 6.21403 13.7715 6.87517 12.8019Z",
    fill: "currentColor"
  }));
});
GalleryIcon.displayName = 'GalleryIcon';
var _default = GalleryIcon;
exports.default = _default;