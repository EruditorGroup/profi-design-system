import React, {forwardRef} from 'react';
import classnames from 'classnames';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

export interface MenuProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to?: string;
}

const Menu = forwardRef(({to, className, ...props}, ref) => {
  return (
    <a
      className={classnames(styles['menu'], className)}
      href={to}
      ref={ref}
      {...props}
    />
  );
}) as React.ForwardRefExoticComponent<
  MenuProps & React.RefAttributes<HTMLAnchorElement>
> & {
  Item: typeof MenuItem;
};

Menu.Item = MenuItem;

export default Menu;
