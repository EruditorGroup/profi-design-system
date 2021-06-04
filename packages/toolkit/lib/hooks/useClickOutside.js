"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

const useClickOutside = (ref, callback) => {
  const handleClick = e => {
    var _ref$current;

    if (ref.current && !((_ref$current = ref.current) !== null && _ref$current !== void 0 && _ref$current.contains(e.target))) {
      callback();
    }
  };

  (0, _react.useEffect)(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  });
};

var _default = useClickOutside;
exports.default = _default;