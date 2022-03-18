import {useEffect} from 'react';
import usePersistCallback from './usePersistCallback';

import type {RefObject} from 'react';

const useClickOutside = <E extends HTMLElement>(
  ref: RefObject<E | undefined>,
  callback: (e: MouseEvent) => void,
): void => {
  const handleClick = usePersistCallback((e: MouseEvent) => {
    if (ref.current && !ref.current?.contains(e.target as Node)) {
      callback(e);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [handleClick]);
};

export default useClickOutside;
