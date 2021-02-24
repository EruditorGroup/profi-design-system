import {forwardRef, useEffect, useMemo} from 'react';
import type {
  ForwardRefExoticComponent,
  RefAttributes,
  ReactNode,
  CSSProperties,
  ReactPortal,
} from 'react';
import {createPortal} from 'react-dom';
import stringifyCssProps from 'utils/stringifyCssProps';

export type BodyPortalProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

/**
 * Element creates <div> element and append it to DOM when effect attached.
 * Hook removes <div> from body when effect disposed.
 * @param {BodyPortalProps} props
 * @example
 *  <BodyPortal className="superman">
 *    <h1>I'm in body right now!</h1>
 *  </BodyPortal>
 */
const BodyPortal: ForwardRefExoticComponent<
  BodyPortalProps & RefAttributes<HTMLDivElement>
> = forwardRef(({className, style, children}, ref): ReactPortal | null => {
  const css = useMemo(() => stringifyCssProps(style), [style]);

  const container = useMemo<HTMLDivElement | null>(() => {
    if (typeof window === 'undefined') return null;
    const div = document.createElement('div');
    window.document.body.appendChild(div);
    return div;
  }, []);

  useEffect(() => {
    return () => {
      if (container) window.document.body.removeChild(container);
    };
  }, [container]);

  useEffect(() => {
    if (container) container.className = className || '';
  }, [className, container]);

  useEffect(() => {
    if (container) container.setAttribute('style', css);
  }, [css, container]);

  if (ref) {
    if (typeof ref === 'function') ref(container);
    else if (ref) ref.current = container;
  }

  return container ? createPortal(children, container) : null;
});

export default BodyPortal;
