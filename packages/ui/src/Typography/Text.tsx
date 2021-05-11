import React, {forwardRef} from 'react';
import {ForwardingComponent} from 'uitype';
import TextBase, {TextBaseProps} from './components/TextBase';

export interface TextProps
  extends Omit<TextBaseProps, 'size' | 'as' | 'fontWeight'> {
  as?: 'p' | 'span' | 'div';
  size?: 'xs' | 's' | 'm' | 'l'; // xl, xxl, huge is available in <Title /> component
  bold?: boolean;
}

const Text: ForwardingComponent<'p', TextProps> = forwardRef(
  ({size = 'm', bold = false, as = 'p', ...props}, ref) => {
    return <TextBase as={as} size={size} bold={bold} {...props} ref={ref} />;
  },
);
export default Text;
