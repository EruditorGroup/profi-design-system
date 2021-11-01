import {DependencyList, useEffect, useRef} from 'react';

import type {MutableRefObject} from 'react';

type TMode = 'onMount' | 'onFocus';

type Params = {
  ref: MutableRefObject<HTMLInputElement | HTMLTextAreaElement> | null;
  deps?: DependencyList;
  mode?: TMode;
};

/** Возвращает каретку в конец набранной строки после фокуса */
const moveToEnd = (element: HTMLInputElement | HTMLTextAreaElement) => {
  element.selectionStart = element.selectionEnd = element.value.length;
};

/**
 * При фокусе на элементе устанавливает каретку в конец набранной строки.
 */
export default function useMoveCaretToEndOnFocus({
  ref,
  mode = 'onMount',
  deps,
}: Params): void {
  const modeRef = useRef(mode);

  useEffect(() => {
    if (modeRef.current === 'onFocus') {
      const element = ref?.current;
      if (!element) return;

      const handleFocus = () => {
        moveToEnd(element);
      };
      element.addEventListener('focus', handleFocus);

      return () => {
        element.removeEventListener('focus', handleFocus);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    const element = ref?.current;
    if (modeRef.current === 'onMount' && element) {
      moveToEnd(element);
    }
  }, [modeRef, ref]);
}
