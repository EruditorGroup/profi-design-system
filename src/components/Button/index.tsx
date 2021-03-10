import React, {forwardRef} from 'react';
import type {
  ButtonHTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
  ReactNode,
} from 'react';
import classnames from 'classnames';
import Spinner from '../Spinner';

import styles from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  design?:
    | 'primary'
    | 'secondary'
    | 'light'
    | 'yandex'
    | 'facebook'
    | 'vk'
    | 'none';
  size?: 'small' | 'default' | 'large';
  icon?: ReactNode;
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
      size = 'default',
      type = 'button',
      block = false,
      disabled,
      isLoading = false,
      fit = false, // без отступов
      children,
      className,
      icon,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={isLoading || disabled}
        className={classnames(
          styles['button'],
          design !== 'none' && styles[`design-${design}`],
          styles[`size-${size}`],
          fit && styles['fit'],
          block && styles[`block`],
          className,
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <Spinner
              className={classnames(
                styles['icon'],
                children && styles['icon-withMargin'],
              )}
              size={size}
              color="light"
            />
            {children}
          </>
        ) : (
          <>
            {icon && (
              <span
                className={classnames(
                  styles['icon'],
                  children && styles['icon-withMargin'],
                )}
              >
                {icon}
              </span>
            )}
            {children}
          </>
        )}
      </button>
    );
  },
);

export default Button;
