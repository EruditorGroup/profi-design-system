import {useCallback, useRef, useMemo} from 'react';
import last from 'lodash/last';

import type {RefCallback, MutableRefObject} from 'react';

/**
 * React hook для объединения нескольких рефов в один.
 * Например объединить forwarderRef и собственный.
 * @param  {...React.Ref} refs - массив рефов
 */
export default function useCombinedRef<T>(
  ...refs: (RefCallback<T> | MutableRefObject<T> | null)[]
): [React.MutableRefObject<T>, (arg: T | null) => void] {
  const newRef = useRef<T>();

  const setRefs = useCallback(
    function (arg: T | null) {
      [...refs, newRef].forEach((ref) => {
        if (typeof ref === 'function') ref(arg);
        else if (ref) ref.current = arg;
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs,
  );

  return [newRef, setRefs];
}
