import React, {forwardRef} from 'react';
import classnames from 'classnames';

import type {
  AnchorHTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';

import styles from './MenuItem.module.scss';

export interface MenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  divided?: boolean;
  disabled?: boolean;
  to?: string;
  rounded?: boolean;
  current?: boolean;
  bordered?: boolean;
}

const MenuItem: ForwardRefExoticComponent<
  MenuItemProps & RefAttributes<HTMLAnchorElement>
> = forwardRef(
  (
    {
      to,
      rounded = true,
      current = false,
      disabled = false,
      divided = false,
      bordered = false,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <a
        className={classnames(
          styles['item'],
          divided && styles['divided'],
          disabled && styles['disabled'],
          styles['design-light'],
          rounded && styles['rounded'],
          current && styles['current'],
          bordered && styles['bordered'],
          className,
        )}
        href={to}
        ref={ref}
        {...props}
      />
    );
  },
);

export default MenuItem;
