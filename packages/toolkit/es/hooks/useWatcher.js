import { useRef } from 'react';
export default function useWatcher(callback, deps) {
  const prevDepsRef = useRef(deps);
  const prevDeps = prevDepsRef.current;

  if (prevDeps !== deps && (prevDeps.length !== deps.length || prevDeps.some((item, index) => !Object.is(item, deps[index])))) {
    callback();
  }

  prevDepsRef.current = deps;
}