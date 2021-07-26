import {useLayoutEffect, useCallback} from 'react';
import {smoothScroll} from '../utils';

export default function useFocusScroll<
  R extends React.RefObject<HTMLInputElement | null>
>(inputRef: R, enabled?: boolean): void {
  const scrollIntoView = useCallback(() => {
    setTimeout(() => {
      const {top} = inputRef.current.getBoundingClientRect() || {};
      if (top > window.innerHeight / 2) {
        console.log(window.pageYOffset + top - window.innerHeight / 2);
        smoothScroll(window.pageYOffset + top - window.innerHeight / 2);
      }
    }, 500);
  }, [inputRef]);

  useLayoutEffect(() => {
    const {current: element} = inputRef;
    if (enabled && element) {
      element.addEventListener('focus', scrollIntoView);
      return () => element.removeEventListener('focus', scrollIntoView);
    }
  }, [inputRef, scrollIntoView, enabled]);
}
