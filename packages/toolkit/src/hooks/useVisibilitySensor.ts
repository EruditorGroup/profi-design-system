import {MutableRefObject, useMemo, useEffect, useRef} from 'react';
import {useControllableState} from './';
import useIntersectionObserver from './useIntersectionObserver';
import usePersistCallback from './usePersistCallback';

type IParams = {
  options?: IntersectionObserverInit;
  ref?: MutableRefObject<HTMLElement>;
  visible?: boolean;
  onVisibilityChanged?: (visible: boolean) => void;
};

const useVisibilitySensor = ({
  options = {threshold: 1},
  ref: originalRef,
  onVisibilityChanged,
  visible: originalVisible,
}: IParams) => {
  const innerRef = useRef<HTMLElement>();
  const ref = originalRef || innerRef;
  const [visible, setVisible] = useControllableState({
    value: originalVisible,
    onChange: onVisibilityChanged,
    defaultValue: false,
  });
  const IntersectionObserver = useIntersectionObserver();

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
