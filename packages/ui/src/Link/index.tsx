import React, {forwardRef} from 'react';
import type {
  AnchorHTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import classnames from 'classnames';

import styles from './Link.module.scss';
import common from '../styles/common.module.css';

export interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to?: string;
  block?: boolean;
}

const Link: ForwardRefExoticComponent<
  LinkProps & RefAttributes<HTMLAnchorElement>
> = forwardRef(
  ({to: href, block, color = 'default', className, ...props}, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={classnames(
          styles['link'],
          block && styles['block'],
          color && common[`color-${color}`],
          className,
        )}
        {...props}
      />
    );
  },
);

export default Link;
