//@flow
import * as React from 'react';

export default function useWatcher(callback: () => any, deps: readonly any[]) {
  const prevDepsRef = React.useRef(deps);
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
