import React, {forwardRef, HTMLAttributes} from 'react';
import classNames from 'classnames';

import styles from './BaseText.module.scss';
import common from '../../styles/common.module.css';

import type {IColor, AliasProps} from '@eruditorgroup/profi-toolkit';

export interface BaseTextProps extends HTMLAttributes<HTMLParagraphElement> {
  color?: IColor;
  bold?: boolean;
  align?: 'center' | 'right' | 'left';
}

const BaseText = forwardRef<unknown, BaseTextProps & AliasProps>(
  function BaseText(
    {align = 'left', bold, color, as: Component = 'p', className, ...props},
    ref,
  ) {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames(
          styles['text'],
          align && styles[`align-${align}`],
          color ? common[`color-${color}`] : styles['default-color'],
          bold && common[`bold`],
          !bold && common[`regular`],
          className,
        )}
      />
    );
  },
);

export default BaseText;
