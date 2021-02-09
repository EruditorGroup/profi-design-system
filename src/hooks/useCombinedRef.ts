import {useRef} from 'react';

/**
 * React hook для объединения нескольких рефов в один.
 * Например объединить forwarderRef и собственный.
 * @param  {...React.Ref} refs - массив рефов
 */
export default function useCombinedRef<T>(
  ...refs: (React.RefCallback<T> | React.MutableRefObject<T> | null)[]
): (arg: T | null) => void {
  const combinedRef = useRef(function setRefs(arg: T | null) {
    refs.forEach((ref) => {
      if (typeof ref === 'function') ref(arg);
      else if (ref !== null && arg) ref.current = arg;
    });
  });

  return combinedRef.current;
}
