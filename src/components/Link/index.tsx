import React, {forwardRef} from 'react';
import classnames from 'classnames';

import styles from './Link.module.css';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    React.RefAttributes<HTMLAnchorElement> {}

const Link: React.ForwardRefExoticComponent<LinkProps> = forwardRef(
  ({href, className, children, ...props}, ref) => {
    return (
      <a ref={ref} className={classnames(styles['link'], className)} {...props}>
        {children}
      </a>
    );
  },
);

export default Link;
