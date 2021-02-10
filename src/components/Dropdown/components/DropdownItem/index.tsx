import React, {forwardRef} from 'react';
import classnames from 'classnames';
import styles from './DropdownItem.module.scss';
import Link, {LinkProps} from '../../../Link';

export interface DropdownItemProps extends LinkProps {
  divided?: boolean;
}

const DropdownItem: React.ForwardRefExoticComponent<
  DropdownItemProps & React.RefAttributes<HTMLAnchorElement>
> = forwardRef(({divided = false, ...props}, ref) => {
  return (
    <Link
      className={classnames(styles['item'], divided && styles['divided'])}
      ref={ref}
      {...props}
    />
  );
});

export default DropdownItem;
