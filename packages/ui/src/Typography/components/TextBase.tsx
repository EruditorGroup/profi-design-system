import React, {forwardRef, HTMLAttributes} from 'react';
import classNames from 'classnames';

import styles from './TextBase.module.scss';
import common from '../../styles/common.module.css';
import type {IColor, ISize, AliasProps} from 'uitype';

export interface TextBaseProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: ISize;
  color?: IColor;
  bold?: boolean;
}

const TextBase = forwardRef<unknown, TextBaseProps & AliasProps>(
  function TextBase(
    {bold, size, color, as: Component = 'p', className, ...props},
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
          bold && common[`bold`],
          !bold && common[`regular`],
          className,
        )}
      />
    );
  },
);

export default TextBase;
