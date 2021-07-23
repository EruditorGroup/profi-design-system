import {useLayoutEffect, useCallback} from 'react';

export default function useFocusScroll<
  R extends React.RefObject<HTMLInputElement | null>
>(inputRef: R, enabled?: boolean): void {
  const scrollIntoView: EventListener = useCallback(() => {
    const {top} = inputRef.current.getBoundingClientRect() || {};
    if (top > window.innerHeight / 2) {
      window.scrollTo(0, top + 40);
    }
  }, [inputRef]);

  useLayoutEffect(() => {
    const {current: element} = inputRef;
    if (enabled && element) {
      element.addEventListener('focus', scrollIntoView);
      return () => element.removeEventListener('focus', scrollIntoView);
    }
  }, [inputRef, scrollIntoView, enabled]);
}
