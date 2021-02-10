import React, {forwardRef, useEffect, useMemo} from 'react';
import {createPortal} from 'react-dom';

type PortalProps = {
  children: React.ReactNode;
  className?: string;
  style?: string;
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

    useEffect(() => {
      container.setAttribute('style', style || '');
    }, [style, container]);

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
