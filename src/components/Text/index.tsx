import React, {forwardRef, HTMLAttributes} from 'react';
import type {RefAttributes, ForwardRefExoticComponent} from 'react';
import classNames from 'classnames';

import styles from './Text.module.scss';

type Variants = HTMLHeadingElement | HTMLParagraphElement;

export interface TextProps
  extends HTMLAttributes<Variants>,
    RefAttributes<Variants> {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  design?: 'default' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'hint';
}

const Text: ForwardRefExoticComponent<TextProps> = forwardRef(
  ({design = 'default', tag = 'p', className, ...props}, ref) => {
    const elementProperties = {
      ref,
      className: classNames(
        styles['text'],
        styles[`design-${design}`],
        className,
      ),
      ...props,
    };
    return React.createElement(tag, elementProperties);
  },
);

export default Text;
