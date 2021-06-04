import type { RefCallback, MutableRefObject } from 'react';
/**
 * React hook для объединения нескольких рефов в один.
 * Например объединить forwarderRef и собственный.
 * @param  {...React.Ref} refs - массив рефов
 */
export default function useCombinedRef<T>(...refs: (RefCallback<T> | MutableRefObject<T> | null)[]): (arg: T | null) => void;
//# sourceMappingURL=useCombinedRef.d.ts.map