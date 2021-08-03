import {useRef, useCallback, useEffect} from 'react';

export default function useDebouncedCallback<
  // осознанный any, не знаем какие аргументы прилетят
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Args extends any[],
  Fn extends (...args: Args) => void
>(callback: Fn, time: number, deps: unknown[]): (...args: Args) => void {
  const timer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    return function cleanUp() {
      clearTimeout(timer.current);
    };
  }, []);

  return useCallback((...args: Args): void => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => callback(...args), time);
    // не умеет определять, что зависимости пробросаны из пропов
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
