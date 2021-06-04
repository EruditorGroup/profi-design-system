import React from 'react';
import type { HTMLAttributes } from 'react';
declare type ColOffset = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11';
declare type ColSpan = ColOffset | 12 | '12';
export interface ColProps extends HTMLAttributes<HTMLDivElement> {
    span?: ColSpan;
    offset?: ColOffset;
}
declare const Col: React.ForwardRefExoticComponent<ColProps & React.RefAttributes<HTMLDivElement>>;
export default Col;
//# sourceMappingURL=index.d.ts.map