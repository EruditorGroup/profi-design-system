import { useEffect, useCallback, useRef } from 'react';
export default function usePersistCallback(callback, deps) {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return useCallback((...args) => callbackRef.current(...args), []);
}