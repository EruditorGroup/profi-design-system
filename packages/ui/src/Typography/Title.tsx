import React, {forwardRef} from 'react';
import TextBase, {TextBaseProps} from './components/TextBase';

export interface TitleProps
  extends Omit<
    TextBaseProps<HTMLParagraphElement | HTMLSpanElement | HTMLDivElement>,
    'size' | 'tag' | 'fontWeight'
  > {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'xl' | 'xxl' | 'huge'; // xl, xxl, huge is available in <Title /> component
  bold?: boolean;
}

const Text = forwardRef<HTMLHeadingElement, TitleProps>(
  ({size = 'xxl', bold = true, level = 3, ...props}, ref) => {
    return (
      <TextBase
        tag={`h${level}` as keyof JSX.IntrinsicElements}
        size={size}
        bold={bold}
        {...props}
        ref={ref}
      />
    );
  },
);

export default Text;
