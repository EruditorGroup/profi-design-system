import {useEffect, useCallback, useRef} from 'react';
import type {DependencyList} from 'react';

export default function usePersistCallback<ARG, RET>(
  callback: (...args: ARG[]) => RET,
  deps: DependencyList | undefined,
): (...args: ARG[]) => RET {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return useCallback((...args) => callbackRef.current(...args), []);
}
