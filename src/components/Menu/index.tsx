import React, {forwardRef} from 'react';
import type {
  AnchorHTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import classnames from 'classnames';
import MenuItem from './components/MenuItem';
import styles from './Menu.module.scss';

export interface MenuProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
}

// additional type cast to flowgen
const Menu: ForwardRefExoticComponent<
  MenuProps & RefAttributes<HTMLAnchorElement>
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
}) as ForwardRefExoticComponent<
  MenuProps & RefAttributes<HTMLAnchorElement>
> & {
  Item: typeof MenuItem;
};

Menu.Item = MenuItem;

export default Menu;
