import React, {forwardRef} from 'react';
import TextBase, {TextBaseProps} from './components/TextBase';

type AllowedElements = HTMLParagraphElement | HTMLSpanElement | HTMLDivElement;

export interface TextProps
  extends Omit<TextBaseProps<AllowedElements>, 'size' | 'tag' | 'fontWeight'> {
  tag?: 'p' | 'span' | 'div';
  size?: 'xs' | 's' | 'm' | 'l'; // xl, xxl, huge is available in <Title /> component
  bold?: boolean;
}

const Text = forwardRef<AllowedElements, TextProps>(
  ({size = 'm', bold = false, tag = 'p', ...props}, ref) => {
    return <TextBase tag={tag} size={size} bold={bold} {...props} ref={ref} />;
  },
);
export default Text;
