"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usePersistCallback;

var _react = require("react");

function usePersistCallback(callback, deps) {
  const callbackRef = (0, _react.useRef)(callback);
  (0, _react.useEffect)(() => {
    callbackRef.current = callback; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return (0, _react.useCallback)((...args) => callbackRef.current(...args), []);
}