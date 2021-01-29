import React, {forwardRef} from 'react';
import clsx from 'clsx';

import styles from './Button.module.css';

console.log(styles);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.RefAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'large' | 'small' | 'normal';
  isLoading?: boolean;
}

const Button: React.ForwardRefExoticComponent<ButtonProps> = forwardRef(
  (
    {
      variant = 'primary',
      isLoading = false,
      size = 'normal',
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          styles['button'],
          styles[`button--${size}`],
          styles[`button--${variant}`],
          className,
        )}
        {...props}
      >
        {isLoading ? 'Loading...' : children}
      </button>
    );
  },
);

export default Button;
