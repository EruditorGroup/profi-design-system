import {useCallback, useEffect, useState} from 'react';
import type {FocusEventHandler, FocusEvent} from 'react';

type FloatLabelState<T = HTMLInputElement> = [
  // Текущее состояние float-label
  boolean,
  {
    //  функция, которую нужно вызвать при фокусе
    onFocus: FocusEventHandler<T>;
    //  функция, которую нужно вызвать при блюре
    onBlur: FocusEventHandler<T>;
  },
];

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
export default function useFloatLabel<
  T extends HTMLElement & {value: string} = HTMLInputElement
>(
  defaultValue = false,
  props: {
    onFocus?: FocusEventHandler<T>;
    onBlur?: FocusEventHandler<T>;
  },
): FloatLabelState<T> {
  const [floated, setFloated] = useState(defaultValue);

  useEffect(() => {
    setFloated(defaultValue);
  }, [defaultValue]);

  const onFloatFocus = useCallback(
    (ev: FocusEvent<T>) => {
      if (props.onFocus) props.onFocus(ev);
      setFloated(true);
    },
    [props],
  );

  const onFloatBlur = useCallback(
    (ev: FocusEvent<T>) => {
      if (props.onBlur) props.onBlur(ev);
      if (!ev.target.value) setFloated(false);
    },
    [props],
  );

  return [
    floated,
    {
      onFocus: onFloatFocus,
      onBlur: onFloatBlur,
    },
  ];
}
