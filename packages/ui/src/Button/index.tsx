import React, {forwardRef} from 'react';
import classnames from 'classnames';

import styles from './Button.module.scss';
import {ForwardingComponent, IColor, ISize, ISocials} from 'uitype';

type ButtonSocial = Extract<ISocials, 'fb' | 'ya' | 'vk'>;
type ButtonColor = Extract<
  IColor,
  'primary' | 'secondary' | 'light' | 'transparent'
>;

export type ButtonProps = {
  design?: ButtonColor | ButtonSocial;
  size?: Extract<ISize, 's' | 'm' | 'l'>;
  block?: boolean;
  rounded?: boolean;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
};

const Button: ForwardingComponent<'button', ButtonProps> = forwardRef(
  (
    {
      design = 'primary',
      size = 'm',
      type = 'button',
      rounded = false,
      block = false,
      as: Component = 'button',
      children,
      className,
      leading,
      trailing,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        type={type}
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
      </Component>
    );
  },
);

export default Button;
