import {useRef} from 'react';

/**
 * React hook для объединения нескольких рефов в один.
 * Например объединить forwarderRef и собственный.
 * @param  {...React.Ref} refs - массив рефов
 */
export function useCombinedRef<T>(
  ...refs: (React.RefCallback<T> | React.MutableRefObject<T> | null)[]
): (arg: T | null) => void {
  const combinedRef = useRef(function setRefs(arg: T | null) {
    refs.forEach((ref) => {
      if (typeof ref === 'function') ref(arg);
      else if (ref != null) ref.current = arg!;
    });
  });

  return combinedRef.current;
}
