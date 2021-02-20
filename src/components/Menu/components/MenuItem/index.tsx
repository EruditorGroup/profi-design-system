import React, {forwardRef} from 'react';
import classnames from 'classnames';
import styles from './MenuItem.module.scss';

export interface DropdownItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  divided?: boolean;
  disabled?: boolean;
  to?: string;
  rounded?: boolean;
  current?: boolean;
}

const DropdownItem: React.ForwardRefExoticComponent<
  DropdownItemProps & React.RefAttributes<HTMLAnchorElement>
> = forwardRef(
  (
    {
      to,
      rounded = true,
      current = false,
      disabled = false,
      divided = false,
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
          className,
        )}
        href={to}
        ref={ref}
        {...props}
      />
    );
  },
);

export default DropdownItem;
