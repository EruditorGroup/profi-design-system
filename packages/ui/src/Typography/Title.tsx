import React, {forwardRef} from 'react';
import {ForwardingComponent} from 'uitype';
import TextBase, {TextBaseProps} from './components/TextBase';

export interface TitleProps extends Omit<TextBaseProps, 'as'> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'xl' | 'xxl' | 'huge'; // xl, xxl, huge is available in <Title /> component
}

const Text: ForwardingComponent<'h3', TitleProps> = forwardRef(function Title(
  {size = 'xxl', bold = true, level = 3, ...props},
  ref,
) {
  return (
    <TextBase
      as={`h${level}` as keyof JSX.IntrinsicElements}
      size={size}
      bold={bold}
      {...props}
      ref={ref}
    />
  );
});

export default Text;
