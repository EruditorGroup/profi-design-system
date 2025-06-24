import React, {forwardRef, ReactNode} from 'react';
import classnames from 'classnames';

import styles from './Badge.module.scss';
import {Text} from '../Typography';

export interface BadgeProps {
  iconLeft?: ReactNode;
  className?: string;
  children?: ReactNode;
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({className, children, iconLeft}, ref) => {
    return (
      <div ref={ref} className={classnames(styles['badge'], className)}>
        {iconLeft ? <div className={styles.iconWrapper}>{iconLeft}</div> : null}
        <Text size="s" bold color="muted">
          {children}
        </Text>
      </div>
    );
  },
);
