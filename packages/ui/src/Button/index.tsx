import React, {forwardRef} from 'react';
import type {
  ButtonHTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import classnames from 'classnames';

import styles from './Button.module.scss';
import {IColor, ISize} from 'uitype';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  design?: IColor;
  size?: ISize;
  block?: boolean;
  rounded?: boolean;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
}

const Button: ForwardRefExoticComponent<
  ButtonProps & RefAttributes<HTMLButtonElement>
> = forwardRef(
  (
    {
      design = 'primary',
      size = 'm',
      type = 'button',
      rounded = false,
      block = false,
      disabled,
      children,
      className,
      leading,
      trailing,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={classnames(
          styles['button'],
          styles[`design-${design}`],
          styles[`size-${size}`],
          block && styles[`block`],
          rounded && styles[`rounded`],
          className,
        )}
        {...props}
      >
        {leading && <span className={styles['leading']}>{leading}</span>}
        <span className={styles['content']}>{children}</span>
        {trailing && <span className={styles['trailing']}>{trailing}</span>}
      </button>
    );
  },
);

export default Button;
