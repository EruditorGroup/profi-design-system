import React, {forwardRef} from 'react';
import classnames from 'classnames';
import LoaderDots from '../LoaderDots';

import styles from './Button.module.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  design?: 'primary' | 'secondary' | 'light' | 'yandex' | 'facebook' | 'vk';
  fit?: boolean;
  size?: 'large' | 'small' | 'normal';
  isLoading?: boolean;
  block?: boolean;
}

const Button: React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLButtonElement>
> = forwardRef(
  (
    {
      design = 'primary',
      block = false,
      size = 'normal',
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
