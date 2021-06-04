import type { HTMLAttributes, ForwardRefExoticComponent, RefAttributes } from 'react';
export interface LoaderProps extends RefAttributes<HTMLDivElement> {
    design?: 'circle' | 'square';
    size?: 'extraSmall' | 'small' | 'medium' | 'large';
    color?: 'white' | 'gray';
    animation?: 'scale' | 'blick';
}
declare const LoaderDots: ForwardRefExoticComponent<LoaderProps & HTMLAttributes<HTMLDivElement>>;
export default LoaderDots;
//# sourceMappingURL=index.d.ts.map