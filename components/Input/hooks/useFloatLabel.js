import { useCallback, useState } from 'react';
/**
 * Прокси-хук для focus и blur евентов, управляющий float label
 * @param onFocus функция, которую нужно вызвать при фокусе
 * @param onBlur функция, которую нужно вызвать при блюре
 * @returns [
 *  floated, // состояния лейбла true|false
 *  onFocus, // focus-хандлер для JSX input элемента
 *  onBlur,  // blur-хандлер для JSX input элемента
 * ]
 */

export default function useFloatLabel(onFocus, onBlur) {
  const [floated, setFloated] = useState(false);
  const onFloatFocus = useCallback(ev => {
    if (onFocus) onFocus(ev);
    setFloated(true);
  }, [onFocus]);
  const onFloatBlur = useCallback(ev => {
    if (onBlur) onBlur(ev);
    if (!ev.target.value) setFloated(false);
  }, [onBlur]);
  return [floated, onFloatFocus, onFloatBlur];
}