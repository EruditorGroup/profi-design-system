import React, {forwardRef} from 'react';
import classnames from 'classnames';

import styles from './Link.module.scss';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  //хотим "to" вместо "href"? flowgen не знает про Omit :(
  to?: string;
  disabled?: boolean;
  color?:
    | 'default'
    | 'brand'
    | 'black'
    | 'white'
    | 'dark-grey'
    | 'medium-grey'
    | 'inherit';
  design?:
    | 'default'
    | 'default'
    | 'bullet'
    | 'tag'
    | 'grayTag'
    | 'plain'
    | 'red'
    | 'whiteTag';
  size?: '13' | '14' | '15' | '16' | '17' | '18' | '20' | '24' | '30';
  lineHeight?: '140' | '125' | '120' | '100';
  bold?: boolean;
  block?: boolean;
  underlined?: boolean;
}

const Link: React.ForwardRefExoticComponent<
  LinkProps & React.RefAttributes<HTMLAnchorElement>
> = forwardRef(
  (
    {
      to: href,
      disabled,
      block = false,
      underlined = false,
      bold = false,
      design = 'default',
      color = 'default',
      size,
      lineHeight,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <a
        ref={ref}
        href={disabled ? undefined : href}
        className={classnames(
          styles['link'],
          underlined && styles['underlined'],
          disabled && styles['disabled'],
          design && styles[`design-${design}`],
          bold && styles[`bold`],
          block && styles['block'],
          color && styles[`color-${color}`],
          size && styles[`size-${size}`],
          lineHeight && styles[`lineHeight-${lineHeight}`],
          className,
        )}
        {...props}
      >
        {children}
      </a>
    );
  },
);

export default Link;
