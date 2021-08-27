import React, {forwardRef} from 'react';
import cx from 'classnames';

import BaseText, {BaseTextProps} from '../BaseText';

import {theme} from '@eruditorgroup/profi-toolkit';

import type {ForwardingComponent} from '@eruditorgroup/profi-toolkit';

import styles from './Title.module.scss';

export interface TitleProps extends Omit<BaseTextProps, 'as'> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'xl' | 'xxl' | '3xl' | '4xl' | '5xl'; // xl, xxl, ..., 5xl is available in <Title /> component
}

const Title: ForwardingComponent<'h3', TitleProps> = forwardRef(function Title(
  {size = 'xxl', bold = true, level = 3, className, ...props},
  ref,
) {
  return (
    <BaseText
      as={`h${level}` as keyof JSX.IntrinsicElements}
      bold={bold}
      className={cx(
        theme.common[`size-${size}`] || styles[`size-${size}`],
        className,
      )}
      {...props}
      ref={ref}
    />
  );
});

export default Title;
