import {useEffect, useRef, EffectCallback, DependencyList} from 'react';

const useUpdateEffect = (
  effect: EffectCallback,
  deps?: DependencyList,
): void => {
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }

    effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useUpdateEffect;
