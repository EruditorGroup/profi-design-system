import React, {forwardRef} from 'react';
import type {
  ButtonHTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import classnames from 'classnames';
import LoaderDots from '../LoaderDots';

import styles from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  design?: 'primary' | 'secondary' | 'light' | 'yandex' | 'facebook' | 'vk';
  size?: 'small' | 'normal' | 'large';
  fit?: boolean;
  isLoading?: boolean;
  block?: boolean;
}

const Button: ForwardRefExoticComponent<
  ButtonProps & RefAttributes<HTMLButtonElement>
> = forwardRef(
  (
    {
      design = 'primary',
      size = 'normal',
      block = false,
      disabled,
      isLoading = false,
      fit = false, // без отступов
      children,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        disabled={isLoading || disabled}
        className={classnames(
          styles['button'],
          styles[`design-${design}`],
          styles[`size-${size}`],
          fit && styles['fit'],
          block && styles[`block`],
          className,
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <LoaderDots />
            {children}
          </>
        ) : (
          children
        )}
      </button>
    );
  },
);

export default Button;
