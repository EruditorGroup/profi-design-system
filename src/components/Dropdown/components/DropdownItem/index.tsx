import React, {forwardRef, useContext} from 'react';
import classnames from 'classnames';
import styles from './DropdownItem.module.scss';
import {DropdownContext} from 'components/Dropdown';

export interface DropdownItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  divided?: boolean;
  disabled?: boolean;
  to?: string;
}

const DropdownItem: React.ForwardRefExoticComponent<
  DropdownItemProps & React.RefAttributes<HTMLAnchorElement>
> = forwardRef(
  ({to, disabled = false, divided = false, className, ...props}, ref) => {
    const context = useContext(DropdownContext);
    return (
      <a
        className={classnames(
          styles['item'],
          divided && styles['divided'],
          disabled && styles['disabled'],
          styles[`design-${context?.design}`],
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
