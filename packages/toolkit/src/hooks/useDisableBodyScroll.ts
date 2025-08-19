import * as React from 'react';
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

export default function useDisableBodyScroll(
  target: React.RefObject<HTMLElement | null> | HTMLElement,
  disable = true,
): void {
  React.useEffect(() => {
    const el = 'current' in target ? target.current : target;
    if (!el) return;

    (disable ? disableBodyScroll : enableBodyScroll)(el, {
      allowTouchMove: el => {
        while (el && el !== document.body) {
          if (el.getAttribute('data-scroll-lock-ignore') !== null) {
            return true;
          }

          el = el.parentElement;
        }
      },
    });
    return () => enableBodyScroll(el);
  }, [target, disable]);
}
