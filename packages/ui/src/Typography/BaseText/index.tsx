import React, {forwardRef, HTMLAttributes} from 'react';
import classNames from 'classnames';

import styles from './BaseText.module.scss';
import {theme} from '@eruditorgroup/profi-toolkit';

import type {IColor, AliasProps} from '@eruditorgroup/profi-toolkit';

export interface BaseTextProps extends HTMLAttributes<HTMLParagraphElement> {
  color?: IColor | 'muted' | 'disabled';
  bold?: boolean;
  align?: 'center' | 'right' | 'left';
}

const BaseText = forwardRef<unknown, BaseTextProps & AliasProps>(
  function BaseText(
    {
      align = 'left',
      bold,
      as: Component = 'p',
      className,
      color = 'default',
      ...props
    },
    ref,
  ) {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames(
          styles['text'],
          align && styles[`align-${align}`],
          theme.common[`color-${color}`] || styles[`color-${color}`],
          bold && theme.common[`bold`],
          !bold && theme.common[`regular`],
          className,
        )}
      />
    );
  },
);

export default BaseText;
