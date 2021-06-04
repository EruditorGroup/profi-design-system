import React, { HTMLAttributes } from 'react';
import { ISize } from 'uitype';
declare type FormControlSize = Extract<ISize, 's' | 'm' | 'l' | 'xl'>;
declare type FormControlInternalProps = {
    label?: string;
    labelFor?: string;
    isLabelFloated?: boolean;
};
export declare type FormControlProps = {
    withFloatLabel?: boolean;
    size?: FormControlSize;
    block?: boolean;
    invalid?: boolean;
    disabled?: boolean;
    leading?: React.ReactNode;
    trailing?: React.ReactNode;
};
export declare type FormControlHTMLProps = Omit<HTMLAttributes<HTMLDivElement>, 'size'> & FormControlInternalProps & FormControlProps;
declare const FormControl: React.FC<FormControlHTMLProps>;
export default FormControl;
//# sourceMappingURL=index.d.ts.map