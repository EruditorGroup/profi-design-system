import React, {forwardRef} from 'react';
import classnames from 'classnames';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

export interface MenuProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
}

// additional type cast to flowgen
const Menu: React.ForwardRefExoticComponent<
  MenuProps & React.RefAttributes<HTMLAnchorElement>
> & {
  Item: typeof MenuItem;
} = forwardRef(({to, className, ...props}, ref) => {
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
