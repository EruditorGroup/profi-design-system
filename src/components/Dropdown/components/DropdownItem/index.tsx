import React, {forwardRef, useContext} from 'react';
import classnames from 'classnames';
import styles from './DropdownItem.module.scss';
import Link from '../../../../components/Link';
import {DropdownContext} from '../../index';

export interface DropdownItemProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  divided?: boolean;
  disabled?: boolean;
  to?: string;
}

const DropdownItem: React.ForwardRefExoticComponent<
  DropdownItemProps & React.RefAttributes<HTMLAnchorElement>
> = forwardRef(({to, disabled = false, divided = false, ...props}, ref) => {
  const context = useContext(DropdownContext);
  return (
    <Link
      className={classnames(
        styles['item'],
        divided && styles['divided'],
        disabled && styles['disabled'],
        styles[`design-${context?.design}`],
      )}
      to={to}
      ref={ref}
      {...props}
      color={disabled ? 'dark-grey' : 'black'}
      disabled={disabled}
    />
  );
});

export default DropdownItem;
