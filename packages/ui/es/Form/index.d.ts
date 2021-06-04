/// <reference types="react" />
import wrapControlWithRef from './wrapControlWithRef';
import type { BaseControlProps } from './types';
import type { BareInputProps } from './BareInput';
import type { BareInputUnitProps } from './BareInputUnit';
import type { BareTextareaProps } from './BareTextarea';
import type { FormControlProps } from './FormControl';
import { default as FormControl } from './FormControl';
declare type InputProps = FormControlProps & BareInputProps & {
    children?: never;
};
declare const Input: import("react").ForwardRefExoticComponent<FormControlProps & Omit<import("react").InputHTMLAttributes<HTMLInputElement>, "size"> & Partial<Pick<import("react").InputHTMLAttributes<HTMLInputElement>, "className" | "id" | "defaultValue" | "placeholder" | "value">> & {
    style?: import("react").CSSProperties | undefined;
    onFocus?: import("react").FocusEventHandler<HTMLInputElement> | undefined;
    onBlur?: import("react").FocusEventHandler<HTMLInputElement> | undefined;
    inputRef?: ({
        current: HTMLInputElement | null;
    } | ((instance: HTMLInputElement | null) => void) | null) | undefined;
    children?: undefined;
} & {
    mask?: string | (string | RegExp)[] | undefined;
    alwaysShowMask?: boolean | undefined;
} & {
    children?: undefined;
} & import("react").RefAttributes<HTMLInputElement>>;
declare type InputUnitProps = FormControlProps & BareInputUnitProps & {
    children?: never;
};
declare const InputUnit: import("react").ForwardRefExoticComponent<FormControlProps & Omit<import("react").InputHTMLAttributes<HTMLInputElement>, "size"> & Partial<Pick<import("react").InputHTMLAttributes<HTMLInputElement>, "className" | "id" | "defaultValue" | "placeholder" | "value">> & {
    style?: import("react").CSSProperties | undefined;
    onFocus?: import("react").FocusEventHandler<HTMLInputElement> | undefined;
    onBlur?: import("react").FocusEventHandler<HTMLInputElement> | undefined;
    inputRef?: ({
        current: HTMLInputElement | null;
    } | ((instance: HTMLInputElement | null) => void) | null) | undefined;
    children?: undefined;
} & {
    mask?: string | (string | RegExp)[] | undefined;
    alwaysShowMask?: boolean | undefined;
} & {
    withFloatLabel?: boolean | undefined;
    unit: import("react").ReactNode;
    unitClassName?: string | undefined;
    unitStyle?: import("react").CSSProperties | undefined;
} & {
    children?: undefined;
} & import("react").RefAttributes<HTMLInputElement>>;
declare type TextareaProps = FormControlProps & BareTextareaProps & {
    children?: never;
};
declare const Textarea: import("react").ForwardRefExoticComponent<FormControlProps & Omit<import("react-textarea-autosize").TextareaAutosizeProps, "size"> & Partial<Pick<import("react").InputHTMLAttributes<HTMLInputElement>, "className" | "id" | "defaultValue" | "placeholder" | "value">> & {
    style?: import("react").CSSProperties | undefined;
    onFocus?: import("react").FocusEventHandler<HTMLTextAreaElement> | undefined;
    onBlur?: import("react").FocusEventHandler<HTMLTextAreaElement> | undefined;
    inputRef?: ({
        current: HTMLTextAreaElement | null;
    } | ((instance: HTMLTextAreaElement | null) => void) | null) | undefined;
    children?: undefined;
} & {
    children?: undefined;
} & {
    children?: undefined;
} & import("react").RefAttributes<HTMLTextAreaElement>>;
export { wrapControlWithRef, FormControl, Input, InputUnit, Textarea };
export type { BaseControlProps, FormControlProps, InputProps, InputUnitProps, TextareaProps, };
//# sourceMappingURL=index.d.ts.map