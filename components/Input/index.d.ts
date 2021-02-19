import React from 'react';
import { Props as InputMaskProps } from 'react-input-mask';
export interface InputProps {
    label?: string;
    withFloatLabel?: boolean;
    placeholder?: string;
    block?: boolean;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & Partial<InputMaskProps> & React.RefAttributes<HTMLInputElement>>;
export default Input;
//# sourceMappingURL=index.d.ts.map