import React, {forwardRef, ButtonHTMLAttributes, useMemo} from 'react';
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
type ButtonSize = Extract<ISize, 's' | 'm' | 'l'> | 'custom';
type ButtonColor = Extract<
  IColor,
  'primary' | 'secondary' | 'light' | 'transparent'
>;

type ButtonUndesignedProps = {
  size?: ButtonSize;
  block?: boolean;
  rounded?: boolean;
  regular?: boolean;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  contentClassName?: string;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AliasProps &
  ButtonUndesignedProps &
  (
    | {design?: ButtonColor | ButtonSocial}
    | {design?: 'link'; underlined?: boolean}
  );

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
    const shouldRenderSuffix = useMemo<boolean>(() => !!(trailing || leading), [
      trailing,
      leading,
    ]);
    const underlined = useMemo(() => {
      const result = design === 'link' && props['underlined'];
      delete props['underlined'];
      return result;
    }, [design, props]);

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
          underlined && styles['underlined'],
          className,
        )}
        {...props}
        ref={ref}
        onClick={props.disabled ? null : props.onClick}
      >
        {shouldRenderSuffix && (
          <span className={styles['leading']}>{leading}</span>
        )}
        <span className={classnames(styles['content'], contentClassName)}>
          {children}
        </span>
        {shouldRenderSuffix && (
          <span className={styles['trailing']}>{trailing}</span>
        )}
      </Component>
    );
  },
);

export default Button;
