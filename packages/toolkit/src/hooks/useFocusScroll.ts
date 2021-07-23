import {useLayoutEffect, useCallback} from 'react';

export default function useFocusScroll<
  R extends React.RefObject<HTMLInputElement | null>
>(inputRef: R, enabled?: boolean): void {
  const scrollIntoView: EventListener = useCallback(() => {
    inputRef.current.getBoundingClientRect();
  }, [inputRef]);

  useLayoutEffect(() => {
    const {current: element} = inputRef;
    if (enabled && element) {
      element.addEventListener('focus', scrollIntoView);
      return () => element.removeEventListener('focus', scrollIntoView);
    }
  }, [inputRef, scrollIntoView, enabled]);
}
