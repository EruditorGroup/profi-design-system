//@flow
import {useEffect, useCallback, useRef} from 'react';

export default function usePersistCallback(
  callback: (...args: any[]) => any,
  deps: readonly any[],
): typeof callback {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, deps);

  return useCallback((...args) => callbackRef.current(...args), []);
}
