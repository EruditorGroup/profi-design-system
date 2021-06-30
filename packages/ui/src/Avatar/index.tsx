import React, {forwardRef} from 'react';
import classnames from 'classnames';

import styles from './Avatar.module.scss';
import common from '../styles/common.module.css';
import {ISize} from 'uitype';
// test
export interface AvatarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  design?: 'circle' | 'rect';
  size?: ISize;
  isOnline?: boolean;
  src?: string;
  username?: string;
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      size,
      style,
      isOnline,
      design = 'circle',
      src,
      username,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        style={src ? {backgroundImage: `url(${src})`, ...style} : style}
        className={classnames(
          styles['avatar'],
          size && common[`size-${size}`],
          styles[`design-${design}`],
          className,
        )}
        {...props}
      >
        {!src && username?.slice(0, 1)}
        {isOnline && <i className={styles['onlineDot']} />}
      </div>
    );
  },
);

export default Avatar;
