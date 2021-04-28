import React, {forwardRef} from 'react';
import type {
  HTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import classnames from 'classnames';
import MenuItem from './components/MenuItem';
import styles from './Menu.module.scss';

export type MenuProps = HTMLAttributes<HTMLDivElement>;

interface MenuComponent
  extends ForwardRefExoticComponent<MenuProps & RefAttributes<HTMLDivElement>> {
  Item: typeof MenuItem;
}

// additional type cast to flowgen
const Menu = forwardRef(({className, ...props}, ref) => {
  return (
    <div
      className={classnames(styles['menu'], className)}
      ref={ref}
      {...props}
    />
  );
}) as MenuComponent;

Menu.Item = MenuItem;

export default Menu;
