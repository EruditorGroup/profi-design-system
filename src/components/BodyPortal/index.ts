import React, {forwardRef, useEffect, useMemo} from 'react';
import {createPortal} from 'react-dom';
import stringifyCssProps from '../../utils/stringifyCssProps';

type PortalProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Element creates <div> element and append it to DOM when effect attached.
 * Hook removes <div> from body when effect disposed.
 * @param {PortalProps} props
 * @example
 *  <BodyPortal className="superman">
 *    <h1>I'm in body right now!</h1>
 *  </BodyPortal>
 */
const BodyPortal: React.ForwardRefExoticComponent<
  PortalProps & React.RefAttributes<HTMLDivElement>
> = forwardRef(
  ({className, style, children}, ref): React.ReactPortal => {
    const container = useMemo(() => document.createElement('div'), []);
    if (ref) {
      if (typeof ref === 'function') ref(container);
      else if (ref) ref.current = container;
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

    return createPortal(children, container);
  },
);

export default BodyPortal;
