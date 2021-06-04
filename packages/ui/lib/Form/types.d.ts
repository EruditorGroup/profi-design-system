import type { CSSProperties, FocusEventHandler, InputHTMLAttributes, RefObject } from 'react';
declare type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};
declare type MutableRef<HTMLElementType> = ((instance: HTMLElementType | null) => void) | Mutable<RefObject<HTMLElementType>> | null;
export declare type BaseControlProps<HTMLElementType = HTMLInputElement> = Partial<Pick<InputHTMLAttributes<HTMLInputElement>, 'id' | 'className' | 'placeholder' | 'value' | 'defaultValue'>> & {
    style?: CSSProperties;
    onFocus?: FocusEventHandler<HTMLElementType>;
    onBlur?: FocusEventHandler<HTMLElementType>;
    inputRef?: MutableRef<HTMLElementType>;
    children?: never;
};
export declare type HTMLElementWithValue = HTMLElement & {
    value: string;
};
export {};
//# sourceMappingURL=types.d.ts.map