import React from 'react';
export interface LoaderProps extends React.RefAttributes<HTMLDivElement> {
    design?: 'circle' | 'square';
    size?: 'extraSmall' | 'small' | 'medium' | 'large';
    color?: 'white' | 'gray';
    animation?: 'scale' | 'blick';
}
declare const LoaderDots: React.ForwardRefExoticComponent<LoaderProps & React.HTMLAttributes<HTMLDivElement>>;
export default LoaderDots;
//# sourceMappingURL=index.d.ts.map