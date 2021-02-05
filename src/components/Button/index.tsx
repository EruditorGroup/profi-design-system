import React, {forwardRef} from 'react';
import classnames from 'classnames';
import LoaderDots from '../LoaderDots';

import styles from './Button.module.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.RefAttributes<HTMLButtonElement> {
  design?: 'primary' | 'secondary' | 'yandex' | 'facebook' | 'vk';
  // size?: 'large' | 'small' | 'normal';
  isLoading?: boolean;
  block?: boolean;
}

const Button: React.ForwardRefExoticComponent<ButtonProps> = forwardRef(
  (
    {
      design = 'primary',
      isLoading = false,
      block = false,
      disabled,
      // size = 'normal',
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={classnames(
          styles['button'],
          // styles[`size-${size}`],
          styles[`design-${design}`],
          block && styles[`block`],
          className,
        )}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading ? <LoaderDots /> : children}
      </button>
    );
  },
);

export default Button;
