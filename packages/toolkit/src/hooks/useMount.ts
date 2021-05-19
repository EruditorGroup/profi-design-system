// @flow
import {useEffect} from 'react';
import usePersistCallback from './usePersistCallback';

function useMount<ARG, RET>(callback: (...args: ARG[]) => RET): void {
  const persistCallback = usePersistCallback(callback);

  useEffect(() => {
    if (persistCallback && typeof persistCallback === 'function') {
      persistCallback();
    }
  }, [persistCallback]);
}

export default useMount;
