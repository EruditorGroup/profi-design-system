import {useRef, useCallback} from 'react';

export default function useDebouncedCallback<
  Args extends any[],
  Fn extends (...args: Args) => void
>(callback: Fn, time: number, deps: unknown[]): ReturnType<typeof useCallback> {
  const timer = useRef<NodeJS.Timeout>();
  const fnRef = useRef(callback);
  fnRef.current = callback;

  return useCallback((...args: Args): void => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => fnRef.current(...args), time);
    // не умеет определять, что зависимости пробросаны из пропов
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
