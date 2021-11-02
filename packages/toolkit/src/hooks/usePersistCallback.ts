import {useEffect, useCallback, useRef} from 'react';
import type {DependencyList} from 'react';

export default function usePersistCallback<ARG extends Array<unknown>, RET>(
  callback: (...args: ARG) => RET,
  deps?: DependencyList,
): (...args: ARG) => RET {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  const persistCallback = useCallback(
    (...args: ARG) => callbackRef.current?.(...args),
    [],
  );

  if (!callback) return null;

  return persistCallback;
}
