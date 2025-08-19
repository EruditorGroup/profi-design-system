import {forwardRef, useMemo} from 'react';
import type {
  ForwardRefExoticComponent,
  RefAttributes,
  ReactNode,
  ReactPortal,
} from 'react';
import {createPortal} from 'react-dom';
import {
  stringifyCssProps,
  useSafeLayoutEffect,
  useWatcher,
} from '@eruditorgroup/profi-toolkit';

export type BodyPortalProps = {
  children: ReactNode;
  className?: string;
  style?: {[key: string]: string};
  scrollLockIgnore?: boolean;
};
// test
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
> = forwardRef(({className, style, children, scrollLockIgnore}, ref): ReactPortal | null => {
  const css = useMemo(() => stringifyCssProps(style), [style]);

  const container = useMemo<HTMLDivElement | null>(() => {
    if (typeof window === 'undefined') return null;
    const div = document.createElement('div');
    div.className = className || '';
    div.setAttribute('style', css);
    if (scrollLockIgnore) {
      div.setAttribute('data-scroll-lock-ignore', 'true');
    }
    return div;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useWatcher(() => {
    if (container) {
      container.className = className || '';
      container.setAttribute('style', css);
    }
  }, [css, className]);

  useSafeLayoutEffect(() => {
    if (container) {
      window.document.body.appendChild(container);
      return () => {
        window.document.body.removeChild(container);
      };
    }
  }, [container]);

  if (ref) {
    if (typeof ref === 'function') ref(container);
    else if (ref) ref.current = container;
  }

  return container ? createPortal(children, container) : null;
});

BodyPortal.displayName = 'BodyPortal';
export default BodyPortal;
