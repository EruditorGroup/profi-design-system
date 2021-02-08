import React, {forwardRef} from 'react';
import classnames from 'classnames';
import LoaderDots from '../LoaderDots';

import styles from './Button.module.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.RefAttributes<HTMLButtonElement> {
  design?: 'primary' | 'secondary' | 'yandex' | 'facebook' | 'vk';
  fit?: boolean;
  size?: 'large' | 'small' | 'normal';
  isLoading?: boolean;
  block?: boolean;
}

const Button: React.ForwardRefExoticComponent<ButtonProps> = forwardRef(
  (
    {
      design = 'primary',
      block = false,
      size = 'normal',
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
        className={classnames(
          styles['button'],
          styles[`design-${design}`],
          styles[`size_${size}`],
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
