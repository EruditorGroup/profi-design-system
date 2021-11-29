import {useEffect} from 'react';
import usePersistCallback from './usePersistCallback';

export default function useKeyPress(
  targetKey: number,
  callback: () => void,
): void {
  const downHandler = usePersistCallback(({key, keyCode}: KeyboardEvent) => {
    const rightKey = isNaN(+key) ? keyCode : key; // key вместо кода может использовать название, в таком случае используем keycode
    if (String(rightKey) === String(targetKey)) {
      callback();
    }
  });

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, [downHandler]);
}
