import React, {forwardRef, HTMLAttributes} from 'react';
import classNames from 'classnames';

import styles from './TextBase.module.scss';
import common from '../../styles/common.module.css';
import {IColor, ISize} from 'uitype';

export interface TextBaseProps<E extends HTMLElement = HTMLElement>
  extends HTMLAttributes<E> {
  tag: keyof JSX.IntrinsicElements;
  size: ISize;
  color?: IColor;
  bold?: boolean;
}

const TextBase = forwardRef<HTMLElement, TextBaseProps>(
  ({bold, size, color = 'secondary', tag, className, ...props}, ref) =>
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

export default TextBase;
