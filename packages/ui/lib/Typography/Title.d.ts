import React from 'react';
import { TextBaseProps } from './components/TextBase';
export interface TitleProps extends Omit<TextBaseProps, 'size' | 'as' | 'fontWeight'> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    size?: 'xl' | 'xxl' | 'huge';
    bold?: boolean;
}
declare const Text: React.ForwardRefExoticComponent<TitleProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLHeadingElement>>;
export default Text;
//# sourceMappingURL=Title.d.ts.map