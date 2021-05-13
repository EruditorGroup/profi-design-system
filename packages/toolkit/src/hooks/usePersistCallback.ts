import {useEffect, useCallback, useRef} from 'react';
import type {DependencyList} from 'react';

export default function usePersistCallback<Callback extends Function>(
  callback: Callback,
): Callback {
  const callbackRef = useRef(callback);

  callbackRef.current = callback;

  return useCallback((...args) => callbackRef.current(args), []);
}
