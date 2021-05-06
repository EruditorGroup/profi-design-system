import React, {forwardRef} from 'react';
import classnames from 'classnames';

import styles from './Button.module.scss';
import {IColor, ISize} from 'uitype';

/* eslint-disable */
interface ForwardingComponent<TInitial extends React.ElementType, P = unknown> {
  <As extends React.ElementType = TInitial>(
    props: React.ComponentPropsWithRef<As> & P,
    context?: any,
  ): React.ReactElement | null;
  defaultProps?: Partial<
    React.ComponentPropsWithRef<TInitial> & P & {as: TInitial}
  >;
}
/* eslint-enable */

export type ButtonProps = {
  design?: IColor | 'link';
  size?: ISize;
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
