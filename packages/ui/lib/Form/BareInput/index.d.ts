import React from 'react';
import type { InputHTMLAttributes } from 'react';
import type { BaseControlProps } from '../types';
export declare type BareInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & BaseControlProps<HTMLInputElement> & {
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
    alwaysShowMask?: boolean;
};
declare const BareInput: React.FC<BareInputProps>;
export default BareInput;
//# sourceMappingURL=index.d.ts.map