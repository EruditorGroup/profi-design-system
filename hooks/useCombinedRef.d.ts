/// <reference types="react" />
/**
 * React hook для объединения нескольких рефов в один.
 * Например объединить forwarderRef и собственный.
 * @param  {...React.Ref} refs - массив рефов
 */
export default function useCombinedRef<T>(...refs: (React.RefCallback<T> | React.MutableRefObject<T> | null)[]): (arg: T | null) => void;
//# sourceMappingURL=useCombinedRef.d.ts.map