import {useEffect, useRef, useCallback} from 'react';

type ThrottledCallbackOptions = {
  leading?: boolean;
  trailing?: boolean;
};

export default function useThrottledCallback<
  // осознанный any, не знаем какие аргументы прилетят
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Args extends any[],
  Fn extends (...args: Args) => void
>(
  callback: Fn,
  ms: number,
  deps: unknown[],
  options: ThrottledCallbackOptions = {leading: true, trailing: true},
): (...args: Args) => void {
  const timeout = useRef<NodeJS.Timeout>();
  const nextCallback = useRef<() => void>(undefined);
  const hasNextCallback = useRef<boolean>(false);

  useEffect(() => {
    return function cleanUp() {
      clearTimeout(timeout.current);
    };
  }, []);

  return useCallback((...args: Args): void => {
    if (!timeout.current) {
      // Выполняем на старте таймера
      if (options.leading) callback(...args);

      const timeoutCallback = () => {
        // Если нет trailing, то просто завершаем таймер по истечению времени
        if (!options.trailing) {
          timeout.current = undefined;
          return;
        }

        // Если есть trailing, то выполняем последний коллбэк, вызванный во время таймера
        if (hasNextCallback.current) {
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
