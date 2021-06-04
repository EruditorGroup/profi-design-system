"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useCombinedRef;

var _react = require("react");

/**
 * React hook для объединения нескольких рефов в один.
 * Например объединить forwarderRef и собственный.
 * @param  {...React.Ref} refs - массив рефов
 */
function useCombinedRef(...refs) {
  const combinedRef = (0, _react.useRef)(function setRefs(arg) {
    refs.forEach(ref => {
      if (typeof ref === 'function') ref(arg);else if (ref !== null && arg) ref.current = arg;
    });
  });
  return combinedRef.current;
}