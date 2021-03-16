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
  color?: string;
  speed?: number;
}

const Spinner: ForwardRefExoticComponent<SpinnerProps> = forwardRef(
  (
    {size = 'default', speed, color, className, ...props}: SpinnerProps,
    ref,
  ) => (
    <span
      style={{transitionDuration: speed ? `${speed}ms` : undefined, color}}
      className={classnames(
        styles['spinner'],
        styles[`size-${size}`],
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);

export default Spinner;
