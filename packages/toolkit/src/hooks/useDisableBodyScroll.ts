import * as React from 'react';
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

export default function useDisableBodyScroll(
  target: React.RefObject<HTMLElement> | HTMLElement,
  disable = true,
): void {
  React.useEffect(() => {
    const el = 'current' in target ? target.current : target;
    (disable ? disableBodyScroll : enableBodyScroll)(el);
    return () => enableBodyScroll(el);
  }, [target, disable]);
}
