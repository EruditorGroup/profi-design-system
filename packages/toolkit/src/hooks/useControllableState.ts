import * as React from 'react';
import { runIfFn } from '../utils/runIfFn';
import usePersistCallback from './usePersistCallback';

export interface UseControllableStateProps<T> {
  value?: T;
  defaultValue?: T | (() => T);
  onChange?: (value: T) => void;
  shouldUpdate?: (prev: T, next: T) => boolean;
}

/**
 * Хук делает состояние управляемым вне компонента.
 * @param props
 */
export default function useControllableState<T>(
  props: UseControllableStateProps<T>,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    shouldUpdate = (prev, next) => prev !== next,
  } = props;
  const onChangeProp = usePersistCallback(onChange);
  const shouldUpdateProp = usePersistCallback(shouldUpdate);

  const [valueState, setValue] = React.useState(defaultValue as T);

  const isControlled = valueProp !== undefined;
  const value = isControlled ? (valueProp as T) : valueState;

  const updateValue = React.useCallback(
    (next: React.SetStateAction<T>) => {
      const nextValue = runIfFn(next, value);

      if (!shouldUpdateProp(value, nextValue)) {
        return;
      }

      if (!isControlled) {
        setValue(nextValue);
      }

      onChangeProp?.(nextValue);
    },
    [isControlled, onChangeProp, value, shouldUpdateProp],
  );

  return [value, updateValue];
}


