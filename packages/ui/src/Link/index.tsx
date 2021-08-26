import React, {forwardRef} from 'react';
import classnames from 'classnames';
import type {
  AnchorHTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';

import styles from './Link.module.scss';
import {theme} from '@eruditorgroup/profi-toolkit';
import type {IColor, ISize} from '@eruditorgroup/profi-toolkit';

export interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to?: string;
  size?: ISize;
  color?: IColor;
  block?: boolean;
  bold?: boolean;
  underlined?: boolean;
  disabled?: boolean;
  clear?: boolean;
}

const Link: ForwardRefExoticComponent<
  LinkProps & RefAttributes<HTMLAnchorElement>
> = forwardRef(
  (
    {
      to: href,
      underlined,
      block,
      bold,
      disabled,
      size,
      color,
      className,
      onClick: onClickOrigin,
      clear,
      ...props
    },
    ref,
  ) => {
    const onClick = (
      e: React.MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    ) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      if (onClickOrigin) onClickOrigin(e);
    };

    return (
      <a
        ref={ref}
        href={href}
        className={classnames(
          !clear && styles['link'],
          block && styles['block'],
          disabled && styles['disabled'],
          underlined && styles['underlined'],
          bold && theme.common['bold'],
          size && theme.common[`size-${size}`],
          color && theme.common[`color-${color}`],
          className,
        )}
        onClick={onClick}
        {...props}
      />
    );
  },
);

export default Link;
