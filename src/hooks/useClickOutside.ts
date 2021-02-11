import {useEffect} from 'react';

const useClickOutside = <E extends HTMLElement>(
  ref: React.RefObject<E | undefined>,
  callback: () => void,
): void => {
  const handleClick = (e: MouseEvent) => {
    console.log(ref.current);
    if (ref.current && !ref.current?.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  });
};

export default useClickOutside;
