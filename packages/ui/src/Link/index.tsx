import React, {forwardRef} from 'react';
import type {
  AnchorHTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import classnames from 'classnames';

import styles from './Link.module.scss';

export interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to?: string;
  block?: boolean;
  bold?: boolean;
  underlined?: boolean;
  disabled?: boolean;
}

const Link: ForwardRefExoticComponent<
  LinkProps & RefAttributes<HTMLAnchorElement>
> = forwardRef(
  ({to: href, underlined, block, bold, disabled, className, ...props}, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={classnames(
          styles['link'],
          block && styles['block'],
          disabled && styles['disabled'],
          underlined && styles['underlined'],
          bold && styles['bold'],
          className,
        )}
        {...props}
      />
    );
  },
);

export default Link;
