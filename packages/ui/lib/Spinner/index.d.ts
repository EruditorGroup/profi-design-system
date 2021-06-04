import type { HTMLAttributes, ForwardRefExoticComponent, RefAttributes } from 'react';
import { IColor, ISize } from 'uitype';
export interface SpinnerProps extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    color?: IColor;
    delay?: number;
    speed?: number;
    size?: ISize;
    withRightPadding?: boolean;
    withLeftPadding?: boolean;
}
declare const Spinner: ForwardRefExoticComponent<SpinnerProps>;
export default Spinner;
//# sourceMappingURL=index.d.ts.map