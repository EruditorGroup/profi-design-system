import {MutableRefObject, useMemo, useEffect, useRef} from 'react';
import {useControllableState} from './';
import useIntersectionObserver from './useIntersectionObserver';
import usePersistCallback from './usePersistCallback';

type IParams<TRef extends HTMLElement> = {
  options?: IntersectionObserverInit;
  ref?: MutableRefObject<TRef>;
  visible?: boolean;
  onVisibilityChanged?: (visible: boolean) => void;
};

const useVisibilitySensor = <TRef extends HTMLElement>({
  options = {threshold: 1},
  ref: originalRef,
  onVisibilityChanged,
  visible: originalVisible,
}: IParams<TRef>) => {
  const innerRef = useRef<TRef>();
  const ref = originalRef || innerRef;
  const IntersectionObserver = useIntersectionObserver();

  const [visible, setVisible] = useControllableState({
    value: originalVisible,
    onChange: (visible: boolean) => onVisibilityChanged(visible),
    defaultValue: false,
  });

  const handle: IntersectionObserverCallback = usePersistCallback(
    ([entry]) => {
      setVisible(entry.intersectionRatio >= options.threshold);
    },
    [setVisible],
  );

  const optionsRef = useRef(options);
  const observer = useMemo(
    () =>
      IntersectionObserver
        ? new IntersectionObserver(handle, optionsRef.current)
        : null,
    [IntersectionObserver, handle],
  );

  useEffect(() => {
    observer?.observe(ref.current);

    return () => observer?.disconnect();
  }, [observer, ref]);

  return {
    visible,
    onVisibilityChanged,
    ref,
    disconnect: () => observer.disconnect(),
  };
};

export default useVisibilitySensor;
