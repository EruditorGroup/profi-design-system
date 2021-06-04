"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useWatcher;

var _react = require("react");

function useWatcher(callback, deps) {
  const prevDepsRef = (0, _react.useRef)(deps);
  const prevDeps = prevDepsRef.current;

  if (prevDeps !== deps && (prevDeps.length !== deps.length || prevDeps.some((item, index) => !Object.is(item, deps[index])))) {
    callback();
  }

  prevDepsRef.current = deps;
}