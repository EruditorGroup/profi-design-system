import React from 'react';
import type { ComponentType, ReactElement, Ref } from 'react';
import type { BaseControlProps, HTMLElementWithValue } from './types';
import type { FormControlProps } from './FormControl';
export declare type ControlProps<T extends BaseControlProps = BaseControlProps> = T & FormControlProps & {
    children?: never;
};
declare const controlFactory: <HTMLElementType extends HTMLElementWithValue, PropsType extends Partial<Pick<React.InputHTMLAttributes<HTMLInputElement>, "className" | "id" | "defaultValue" | "placeholder" | "value">> & {
    style?: React.CSSProperties | undefined;
    onFocus?: React.FocusEventHandler<HTMLElementType> | undefined;
    onBlur?: React.FocusEventHandler<HTMLElementType> | undefined;
    inputRef?: ({
        current: HTMLElementType | null;
    } | ((instance: HTMLElementType | null) => void) | null) | undefined;
    children?: undefined;
} & FormControlProps>(Component: React.ComponentType<PropsType>) => (props: PropsType, ref: React.Ref<HTMLElementType>) => ReactElement;
export default controlFactory;
//# sourceMappingURL=wrapControlWithRef.d.ts.map