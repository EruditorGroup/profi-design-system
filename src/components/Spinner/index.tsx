import React, {forwardRef} from 'react';
import type {
  HTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import classnames from 'classnames';

import styles from './Spinner.module.scss';

export interface SpinnerProps
  extends HTMLAttributes<HTMLDivElement>,
    RefAttributes<HTMLDivElement> {
  size?: 'small' | 'default' | 'large';
  color?: 'light' | 'brand';
  speed?: number;
}

const SpinnerDots: ForwardRefExoticComponent<SpinnerProps> = forwardRef(
  (
    {
      size = 'default',
      speed = 500,
      color = 'light',
      className,
      ...props
    }: SpinnerProps,
    ref,
  ) => (
    <span
      style={{transitionDuration: `${speed}ms`}}
      className={classnames(
        styles['spinner'],
        styles[`size-${size}`],
        styles[`color-${color}`],
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);

export default SpinnerDots;
