import React, {forwardRef} from 'react';
import Link from '../Link';
import {ForwardingComponent} from 'uitype';
import TextBase, {TextBaseProps} from './components/TextBase';

export interface TextProps extends Omit<TextBaseProps, 'as'> {
  as?: 'p' | 'span' | 'div' | typeof Link;
}

const Text: ForwardingComponent<'p', TextProps> = forwardRef(function Text(
  {as: Component = 'p', size, ...props},
  ref,
) {
  return <TextBase as={Component} size={size} {...props} ref={ref} />;
});

export default Text;
