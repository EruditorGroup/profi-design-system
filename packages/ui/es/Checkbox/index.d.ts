import React from 'react';
import type { InputHTMLAttributes } from 'react';
declare type CheckboxSize = 'm' | 'l' | 'xl' | 'xxl';
declare type CheckboxType = 'radio' | 'checkbox';
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    size?: CheckboxSize;
    disabled?: boolean;
    type?: CheckboxType;
}
export declare const getTextSize: (size: CheckboxSize) => CheckboxSize;
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export default Checkbox;
//# sourceMappingURL=index.d.ts.map