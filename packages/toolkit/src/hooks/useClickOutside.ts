import {useEffect, useCallback} from 'react';

import type {RefObject} from 'react';

const useClickOutside = <E extends HTMLElement>(
  ref: RefObject<E | undefined>,
  callback: (e: MouseEvent) => void,
): void => {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current?.contains(e.target as Node)) {
        callback(e);
      }
    },
    [callback, ref],
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleClick);
    }, 0);
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick]);
};

export default useClickOutside;
