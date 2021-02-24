//@flow
import {useRef} from 'react';
import type {DependencyList} from 'react';

export default function useWatcher<RET>(
  callback: () => RET,
  deps: DependencyList,
): void {
  const prevDepsRef = useRef(deps);
  const prevDeps = prevDepsRef.current;

  if (
    prevDeps !== deps &&
    (prevDeps.length !== deps.length ||
      prevDeps.some((item, index) => !Object.is(item, deps[index])))
  ) {
    callback();
  }

  prevDepsRef.current = deps;
}
