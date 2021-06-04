"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _reactDom = require("react-dom");

var _profiToolkit = require("@eruditorgroup/profi-toolkit");

/**
 * Element creates <div> element and append it to DOM when effect attached.
 * Hook removes <div> from body when effect disposed.
 * @param {BodyPortalProps} props
 * @example
 *  <BodyPortal className="superman">
 *    <h1>I'm in body right now!</h1>
 *  </BodyPortal>
 */
const BodyPortal = /*#__PURE__*/(0, _react.forwardRef)(({
  className,
  style,
  children
}, ref) => {
  const css = (0, _react.useMemo)(() => (0, _profiToolkit.stringifyCssProps)(style), [style]);
  const container = (0, _react.useMemo)(() => {
    if (typeof window === 'undefined') return null;
    const div = document.createElement('div');
    div.style.display = 'none';
    window.document.body.appendChild(div);
    return div;
  }, []);
  (0, _react.useEffect)(() => {
    if (container) container.style.display = '';
    return () => {
      if (container) window.document.body.removeChild(container);
    };
  }, [container]);
  (0, _react.useEffect)(() => {
    if (container) container.className = className || '';
  }, [className, container]);
  (0, _react.useEffect)(() => {
    if (container) container.setAttribute('style', css);
  }, [css, container]);

  if (ref) {
    if (typeof ref === 'function') ref(container);else if (ref) ref.current = container;
  }

  return container ? /*#__PURE__*/(0, _reactDom.createPortal)(children, container) : null;
});
var _default = BodyPortal;
exports.default = _default;