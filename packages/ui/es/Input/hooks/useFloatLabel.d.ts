import type { FocusEventHandler } from 'react';
declare type FloatLabelState = [
    boolean,
    {
        onFocus: FocusEventHandler<HTMLInputElement>;
        onBlur: FocusEventHandler<HTMLInputElement>;
    }
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
export default function useFloatLabel(defaultValue: boolean | undefined, props: {
    onFocus?: FocusEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
}): FloatLabelState;
export {};
//# sourceMappingURL=useFloatLabel.d.ts.map