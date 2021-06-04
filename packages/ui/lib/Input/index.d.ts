import type { ForwardRefExoticComponent, RefAttributes, Ref, InputHTMLAttributes } from 'react';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    withFloatLabel?: boolean;
    block?: boolean;
    /**
     * Mask string. Format characters are:
     * * `9`: `0-9`
     * * `a`: `A-Z, a-z`
     * * `\*`: `A-Z, a-z, 0-9`
     *
     * Any character can be escaped with backslash, which usually will appear as double backslash in JS strings.
     * For example, German phone mask with unremoveable prefix +49 will look like `mask="+4\\9 99 999 99"` or `mask={"+4\\\\9 99 999 99"}`
     */
    mask?: string | Array<string | RegExp>;
    /**
     * Character to cover unfilled editable parts of mask. Default character is "_". If set to null, unfilled parts will be empty, like in ordinary input.
     */
    maskPlaceholder?: string | null;
    /**
     * Show mask even in empty input without focus.
     */
    alwaysShowMask?: boolean;
    /**
     * Use inputRef instead of ref if you need input node to manage focus, selection, etc.
     */
    inputRef?: Ref<HTMLInputElement>;
}
declare const Input: ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>>;
export default Input;
//# sourceMappingURL=index.d.ts.map