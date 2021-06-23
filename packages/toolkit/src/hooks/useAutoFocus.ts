import {useEffect} from 'react';

export default function useAutoFocus<
  R extends React.RefObject<HTMLInputElement>
>(inputRef: R, enabled?: boolean): void {
  useEffect(
    function setFocus() {
      const ref = inputRef.current;
      if (enabled && ref && ref.focus) {
        ref.focus();
        if (
          ref.setSelectionRange &&
          /text|search|password|tel|url|email/i.test(ref.type || '')
        ) {
          const {value} = ref;
          const length = (value && value.length) || 0;
          ref.setSelectionRange(length, length);
        }
      }
    },
    [inputRef, enabled],
  );
}
