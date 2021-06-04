"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useVisibilityToggler;

var _react = require("react");

function useVisibilityToggler({
  defaultState = false,
  refs
}) {
  const [isOpen, setIsOpen] = (0, _react.useState)(defaultState);
  const handleChangePagePosition = (0, _react.useCallback)(() => {
    setIsOpen(false);
  }, []);
  const handleMousedown = (0, _react.useCallback)(({
    target
  }) => {
    if (target instanceof Node && !refs.some(ref => {
      if (ref instanceof Node) return ref.contains(target);
      return ref.current && ref.current.contains(target);
    })) {
      setIsOpen(false);
    }
  }, [refs]);
  (0, _react.useEffect)(() => {
    if (isOpen) {
      window.addEventListener('scroll', handleChangePagePosition);
      window.addEventListener('resize', handleChangePagePosition);
      window.addEventListener('mousedown', handleMousedown);
    }

    return () => {
      window.removeEventListener('scroll', handleChangePagePosition);
      window.removeEventListener('resize', handleChangePagePosition);
      window.removeEventListener('mousedown', handleMousedown);
    };
  }, [isOpen, handleChangePagePosition, handleMousedown]);
  return [isOpen, setIsOpen];
}