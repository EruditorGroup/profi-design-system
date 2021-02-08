import {useEffect, useState} from 'react';
import {createPortal} from 'react-dom';

type PortalProps = {
  ref: React.MutableRefObject<HTMLDivElement>;
  children: React.ReactElement;
  className?: string;
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
export default function BodyPortal({
  className,
  ref,
  children,
}: PortalProps): React.ReactPortal {
  const [container] = useState(() => document.createElement('div'));
  if (ref) ref.current = container;

  useEffect(() => {
    container.className = className || '';
  }, [className]);

  useEffect(() => {
    window.document.body.appendChild(container);
    return () => {
      window.document.body.removeChild(container);
    };
  }, [container]);

  return createPortal(children, container);
}
