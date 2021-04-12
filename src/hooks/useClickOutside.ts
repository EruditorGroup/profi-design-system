import {useEffect} from 'react';
import type {RefObject} from 'react';

const useClickOutside = <E extends HTMLElement>(
  ref: RefObject<E | undefined>,
  callback: () => void,
): void => {
  const handleClick = (e: MouseEvent) => {
    console.log('CHECK!', ref);
    if (ref.current && !ref.current?.contains(e.target as Node)) {
      console.log('OUTSIDE!');
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  });
};

export default useClickOutside;
