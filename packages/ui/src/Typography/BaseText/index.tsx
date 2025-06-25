import React, {forwardRef, HTMLAttributes} from 'react';
import cx from 'classnames';

import styles from './BaseText.module.scss';
import {theme} from '@eruditorgroup/profi-toolkit';

import type {IColor, AliasProps} from '@eruditorgroup/profi-toolkit';

export interface BaseTextProps extends HTMLAttributes<HTMLParagraphElement> {
  color?: IColor | 'muted' | 'disabled' | 'white';
  bold?: boolean;
  align?: 'center' | 'right' | 'left';
  skeleton?: boolean;
}

const BaseText = forwardRef<unknown, BaseTextProps & AliasProps>(
  function BaseText(
    {
      align = 'left',
      bold,
      as: Component = 'p',
      className,
      color = 'default',
      skeleton,
      ...props
    },
    ref,
  ) {
    return (
      <Component
        {...props}
        ref={ref}
        className={cx(
          align && styles[`align-${align}`],
          theme.common[`color-${color}`] || styles[`color-${color}`],
          bold && theme.common[`bold`],
          !bold && theme.common[`regular`],
          skeleton && cx(theme.transitions.skeleton, styles['skeleton']),
          className,
        )}
      />
    );
  },
);

export default BaseText;
