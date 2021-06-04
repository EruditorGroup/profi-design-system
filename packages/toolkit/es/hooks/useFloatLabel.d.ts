import type { FocusEventHandler } from 'react';
declare type FloatLabelState<T = HTMLInputElement> = [
    boolean,
    {
        onFocus: FocusEventHandler<T>;
        onBlur: FocusEventHandler<T>;
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
export default function useFloatLabel<T extends HTMLElement & {
    value: string;
} = HTMLInputElement>(defaultValue: boolean | undefined, props: {
    onFocus?: FocusEventHandler<T>;
    onBlur?: FocusEventHandler<T>;
}): FloatLabelState<T>;
export {};
//# sourceMappingURL=useFloatLabel.d.ts.map