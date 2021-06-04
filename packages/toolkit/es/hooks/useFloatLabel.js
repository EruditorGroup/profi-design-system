import { useCallback, useEffect, useState } from 'react';

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
export default function useFloatLabel(defaultValue = false, props) {
  const [floated, setFloated] = useState(defaultValue);
  useEffect(() => {
    setFloated(defaultValue);
  }, [defaultValue]);
  const onFloatFocus = useCallback(ev => {
    if (props.onFocus) props.onFocus(ev);
    setFloated(true);
  }, [props]);
  const onFloatBlur = useCallback(ev => {
    if (props.onBlur) props.onBlur(ev);
    if (!ev.target.value) setFloated(false);
  }, [props]);
  return [floated, {
    onFocus: onFloatFocus,
    onBlur: onFloatBlur
  }];
}