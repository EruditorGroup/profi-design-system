import {useCallback, useEffect, useState} from 'react';
import type {FocusEventHandler, FocusEvent} from 'react';

/**
 * Прокси-хук для focus и blur евентов, управляющий float label
 * @param defaultValue {boolean} Дефолтное значение floated
 * @param onFocus функция, которую нужно вызвать при фокусе
 * @param onBlur функция, которую нужно вызвать при блюре
 * @returns [
 *  floated, // состояния лейбла true|false
 *  onFocus, // focus-хандлер для JSX input элемента
 *  onBlur,  // blur-хандлер для JSX input элемента
 * ]
 */
export default function useFloatLabel(
  defaultValue = false,
  onFocus?: FocusEventHandler<HTMLInputElement>,
  onBlur?: FocusEventHandler<HTMLInputElement>,
): [
  boolean,
  FocusEventHandler<HTMLInputElement>,
  FocusEventHandler<HTMLInputElement>,
] {
  const [floated, setFloated] = useState(defaultValue);

  useEffect(() => {
    setFloated(defaultValue);
  }, [defaultValue]);

  const onFloatFocus = useCallback(
    (ev: FocusEvent<HTMLInputElement>) => {
      if (onFocus) onFocus(ev);
      setFloated(true);
    },
    [onFocus],
  );

  const onFloatBlur = useCallback(
    (ev: FocusEvent<HTMLInputElement>) => {
      if (onBlur) onBlur(ev);
      if (!ev.target.value) setFloated(false);
    },
    [onBlur],
  );

  return [floated, onFloatFocus, onFloatBlur];
}
