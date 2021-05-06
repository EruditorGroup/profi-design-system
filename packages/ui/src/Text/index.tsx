import React, {forwardRef, HTMLAttributes} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import classNames from 'classnames';

import styles from './Text.module.scss';
import common from '../styles/common.module.css';
import {IColor, ISize} from 'uitype';

type TagVariants = HTMLParagraphElement | HTMLSpanElement | HTMLDivElement;

export interface TextProps<E extends TagVariants = HTMLParagraphElement>
  extends HTMLAttributes<E> {
  tag?: 'p' | 'span' | 'div';
  color?: IColor;
  size?: ISize;
  bold?: boolean;
}

const Text: ForwardRefExoticComponent<TextProps> = forwardRef(
  <P extends TextProps>(
    {bold, size = 'm', color = 'secondary', tag = 'p', className, ...props}: P,
    ref: P extends TextProps<infer Element> ? React.Ref<Element> : never,
  ) =>
    React.createElement(tag, {
      ref,
      className: classNames(
        styles['text'],
        common[`color-${color}`],
        common[`size-${size}`],
        bold && styles[`bold`],
        className,
      ),
      ...props,
    }),
);

export default Text;
