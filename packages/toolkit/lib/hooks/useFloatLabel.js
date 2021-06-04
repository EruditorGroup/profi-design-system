"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useFloatLabel;

var _react = require("react");

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
function useFloatLabel(defaultValue = false, props) {
  const [floated, setFloated] = (0, _react.useState)(defaultValue);
  (0, _react.useEffect)(() => {
    setFloated(defaultValue);
  }, [defaultValue]);
  const onFloatFocus = (0, _react.useCallback)(ev => {
    if (props.onFocus) props.onFocus(ev);
    setFloated(true);
  }, [props]);
  const onFloatBlur = (0, _react.useCallback)(ev => {
    if (props.onBlur) props.onBlur(ev);
    if (!ev.target.value) setFloated(false);
  }, [props]);
  return [floated, {
    onFocus: onFloatFocus,
    onBlur: onFloatBlur
  }];
}