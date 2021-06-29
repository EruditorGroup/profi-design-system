import React, {forwardRef, ButtonHTMLAttributes} from 'react';
import classnames from 'classnames';

import styles from './Button.module.scss';
import {
  ForwardingComponent,
  AliasProps,
  IColor,
  ISize,
  ISocials,
} from '@eruditorgroup/profi-toolkit';

type ButtonSocial = Extract<ISocials, 'fb' | 'ya' | 'vk'>;
type ButtonColor = Extract<
  IColor,
  'primary' | 'secondary' | 'light' | 'transparent'
>;

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    AliasProps {
  design?: ButtonColor | ButtonSocial | 'link';
  size?: Extract<ISize, 's' | 'm' | 'l'> | 'custom';
  block?: boolean;
  rounded?: boolean;
  regular?: boolean;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  contentClassName?: string;
}

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
      contentClassName,
      leading,
      trailing,
      regular,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        type={type}
        className={classnames(
          styles['button'],
          styles[`design-${design}`],
          styles[`size-${size}`],
          block && styles[`block`],
          rounded && styles[`rounded`],
          regular && styles[`regular`],
          className,
        )}
        {...props}
        ref={ref}
        onClick={props.disabled ? null : props.onClick}
      >
        {leading && <span className={styles['leading']}>{leading}</span>}
        <span className={classnames(styles['content'], contentClassName)}>
          {children}
        </span>
        {trailing && <span className={styles['trailing']}>{trailing}</span>}
      </Component>
    );
  },
);

export default Button;
