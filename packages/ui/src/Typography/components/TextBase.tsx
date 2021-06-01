import React, {forwardRef} from 'react';
import classNames from 'classnames';

import styles from './TextBase.module.scss';
import common from '../../styles/common.module.css';
import type {ForwardingComponent, IColor, ISize} from 'uitype';

export interface TextBaseProps {
  as: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: ISize;
  color?: IColor | 'muted';
  bold?: boolean;
}

const TextBase: ForwardingComponent<'p', TextBaseProps> = forwardRef(
  function TextBase(
    {bold, size, color, as: Component, className, ...props},
    ref,
  ) {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames(
          styles['text'],
          color && common[`color-${color}`],
          size && common[`size-${size}`],
          {
            [styles[`bold`]]: bold,
            [styles[`color-text-muted`]]: color === 'muted',
          },
          className,
        )}
      />
    );
  },
);

export default TextBase;
