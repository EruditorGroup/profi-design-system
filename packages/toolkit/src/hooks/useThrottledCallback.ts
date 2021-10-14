import {useEffect, useRef, useCallback} from 'react';

type ThrottledCallbackOptions = {
  leading?: boolean;
  trailing?: boolean;
};

export default function useThrottledCallback<
  // осознанный any, не знаем какие аргументы прилетят
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Fn extends (...args: any[]) => void
>(
  callback: Fn,
  ms: number,
  deps: unknown[],
  options: ThrottledCallbackOptions = {leading: true, trailing: true},
): (...args: Parameters<Fn>) => void {
  const timeout = useRef<NodeJS.Timeout>();
  const nextCallback = useRef<() => void>(undefined);
  const hasNextCallback = useRef<boolean>(false);

  useEffect(() => {
    return function cleanUp() {
      clearTimeout(timeout.current);
    };
  }, []);

  return useCallback((...args) => {
    if (!timeout.current) {
      // Выполняем на старте таймера
      if (options.leading) callback(...args);

      const timeoutCallback = () => {
        // Если есть trailing, то выполняем последний коллбэк, вызванный во время таймера
        if (options.trailing && hasNextCallback.current) {
          hasNextCallback.current = false;
          nextCallback.current();
          timeout.current = setTimeout(timeoutCallback, ms);
        } else {
          timeout.current = undefined;
        }
      };

      timeout.current = setTimeout(timeoutCallback, ms);
    } else {
      nextCallback.current = () => callback(...args);
      hasNextCallback.current = true;
    }

    // не умеет определять, что зависимости пробросаны из пропов
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
