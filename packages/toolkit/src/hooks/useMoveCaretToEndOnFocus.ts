import {DependencyList, useEffect} from 'react';

import type {MutableRefObject} from 'react';

/**
 * При фокусе на элементе устанавливает каретку в конец набранной строки.
 */
export default function useMoveCaretToEndOnFocus(
  ref: MutableRefObject<HTMLInputElement | HTMLTextAreaElement> | null,
  deps?: DependencyList
): void {
  useEffect(() => {
    const element = ref?.current;
    if (!element) return;

    const handleFocus = () => {
      /** Возвращает каретку в конец набранной строки после фокуса */
      const val = element.value;
      element.value = '';
      element.value = val;
    };
    element.addEventListener('focus', handleFocus);

    return () => {
      element.removeEventListener('focus', handleFocus);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}


