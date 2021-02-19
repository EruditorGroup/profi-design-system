import { forwardRef, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import stringifyCssProps from "@profiru/ui/utils/stringifyCssProps";

/**
 * Element creates <div> element and append it to DOM when effect attached.
 * Hook removes <div> from body when effect disposed.
 * @param {BodyPortalProps} props
 * @example
 *  <BodyPortal className="superman">
 *    <h1>I'm in body right now!</h1>
 *  </BodyPortal>
 */
const BodyPortal = /*#__PURE__*/forwardRef(({
  className,
  style,
  children
}, ref) => {
  const container = useMemo(() => document.createElement('div'), []);

  if (ref) {
    if (typeof ref === 'function') ref(container);else if (ref) ref.current = container;
  }

  useEffect(() => {
    container.className = className || '';
  }, [className, container]);
  const css = useMemo(() => stringifyCssProps(style), [style]);
  useEffect(() => {
    container.setAttribute('style', css);
  }, [css, container]);
  useEffect(() => {
    window.document.body.appendChild(container);
    return () => {
      window.document.body.removeChild(container);
    };
  }, [container]);
  return /*#__PURE__*/createPortal(children, container);
});
export default BodyPortal;