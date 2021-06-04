import React from 'react';
import { TextareaAutosizeProps } from 'react-textarea-autosize';
import type { BaseControlProps } from '../types';
export declare type BareTextareaProps = Omit<TextareaAutosizeProps, 'size'> & BaseControlProps<HTMLTextAreaElement> & {
    children?: never;
};
declare const BareTextarea: React.FC<BareTextareaProps>;
export default BareTextarea;
//# sourceMappingURL=index.d.ts.map