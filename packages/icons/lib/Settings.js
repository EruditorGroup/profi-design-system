"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SettingsIcon = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  return /*#__PURE__*/_react.default.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 22 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    ref: ref
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.04567 3.00391L9.25336 1.75777C9.39566 0.903968 10.1344 0.278183 11 0.278183C11.8655 0.278183 12.6043 0.903968 12.7466 1.75777L12.9542 3.00391C13.6091 3.158 14.2348 3.38783 14.8215 3.68365L15.7818 2.86242C16.4396 2.29984 17.4078 2.29529 18.0708 2.85168C18.7339 3.40807 18.8976 4.36228 18.4577 5.1078L17.815 6.19738C18.21 6.72635 18.5448 7.30286 18.8094 7.91676L20.0726 7.90491C20.9381 7.89679 21.6827 8.51561 21.833 9.36805C21.9833 10.2205 21.4953 11.0566 20.6792 11.345L19.4862 11.7666C19.4478 12.4429 19.3305 13.0981 19.1431 13.723L20.1182 14.5258C20.7865 15.0759 20.9591 16.0286 20.5263 16.7782C20.0935 17.5278 19.1822 17.8546 18.3716 17.551L17.1866 17.107C16.7321 17.5893 16.2219 18.0183 15.6662 18.384L15.8974 19.6271C16.0557 20.4781 15.5756 21.3188 14.7622 21.6148C13.9488 21.9108 13.0406 21.5755 12.6149 20.8218L11.9929 19.7208C11.6672 19.7587 11.3359 19.7782 11 19.7782C10.6641 19.7782 10.3327 19.7587 10.007 19.7208L9.38506 20.8218C8.95932 21.5755 8.05113 21.9108 7.23775 21.6148C6.42436 21.3188 5.94423 20.4781 6.10253 19.6271L6.33376 18.384C5.77806 18.0184 5.26782 17.5893 4.81332 17.1071L3.62831 17.551C2.81775 17.8547 1.90644 17.5278 1.47365 16.7782C1.04086 16.0286 1.21345 15.0759 1.88172 14.5258L2.85683 13.7231C2.66946 13.0981 2.55207 12.4429 2.51376 11.7666L1.32091 11.3451C0.504784 11.0567 0.0167824 10.2205 0.167089 9.36807C0.317396 8.51564 1.06195 7.89682 1.9275 7.90494L3.19048 7.91679C3.45511 7.30279 3.79004 6.72619 4.18512 6.19715L3.5425 5.10783C3.10269 4.36231 3.26633 3.40809 3.92941 2.8517C4.59248 2.29532 5.56062 2.29986 6.21844 2.86245L7.17856 3.68355C7.76522 3.38778 8.39084 3.15798 9.04567 3.00391ZM10.9999 15.2782C13.209 15.2782 14.9999 13.4873 14.9999 11.2782C14.9999 9.06903 13.209 7.27817 10.9999 7.27817C8.79074 7.27817 6.99988 9.06903 6.99988 11.2782C6.99988 13.4873 8.79074 15.2782 10.9999 15.2782Z",
    fill: "currentColor"
  }));
});
SettingsIcon.displayName = 'SettingsIcon';
var _default = SettingsIcon;
exports.default = _default;