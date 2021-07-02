import {useRef} from 'react';

import type {RefCallback, MutableRefObject} from 'react';

/**
 * React hook для объединения нескольких рефов в один.
 * Например объединить forwarderRef и собственный.
 * @param  {...React.Ref} refs - массив рефов
 */
export default function useCombinedRef<T>(
  ...refs: (RefCallback<T> | MutableRefObject<T> | null)[]
): (arg: T | null) => void {
  const combinedRef = useRef(function setRefs(arg: T | null) {
    refs.forEach((ref) => {
      if (typeof ref === 'function') ref(arg);
      else if (ref !== null && arg) ref.current = arg;
    });
  });

  return combinedRef.current;
}
