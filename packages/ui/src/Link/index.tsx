import React, {forwardRef} from 'react';
import type {
  AnchorHTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import classnames from 'classnames';

import styles from './Link.module.scss';
import common from '../styles/common.module.css';
import {IColor} from 'uitype';

export interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to?: string;
  block?: boolean;
  underlined?: boolean;
  color?: IColor;
  disabled?: boolean;
}

const Link: ForwardRefExoticComponent<
  LinkProps & RefAttributes<HTMLAnchorElement>
> = forwardRef(
  (
    {
      to: href,
      underlined,
      block,
      disabled,
      color = 'default',
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <a
        ref={ref}
        href={href}
        className={classnames(
          styles['link'],
          block && styles['block'],
          color && (styles[`color-${color}`] || common[`color-${color}`]),
          disabled && styles['disabled'],
          underlined && styles['underlined'],
          className,
        )}
        {...props}
      />
    );
  },
);

export default Link;
