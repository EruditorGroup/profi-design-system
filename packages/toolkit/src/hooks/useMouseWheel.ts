import {useEffect} from 'react';
import type {RefObject} from 'react';

export default function useMouseWheel<R extends RefObject<HTMLElement>>(
  refElement: R,
  callback: (e: WheelEvent) => void,
): void {
  useEffect(() => {
    if (!refElement.current) return;
    const {current: element} = refElement;

    element.addEventListener('wheel', callback);
    return () => element.removeEventListener('wheel', callback);
  }, [refElement, callback]);
}
