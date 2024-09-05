import {useEffect} from 'react';
import usePersistCallback from './usePersistCallback';
import type {RefObject, DependencyList} from 'react';

const useClickOutside = <E extends HTMLElement>(
  ref: RefObject<E | undefined>,
  callback: (e: MouseEvent) => void,
  deps?: DependencyList,
): void => {
  const persistCallback = usePersistCallback(callback, deps);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && ref.current.contains(e.target as Node)) {
        persistCallback(e);
      }
    };

    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleClick);
    }, 0);
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleClick);
    };
  }, [ref, persistCallback]);
};

export default useClickOutside;
